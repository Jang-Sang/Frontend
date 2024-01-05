import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { useRef, useState } from "react";
import TodoApi from "apis/todo";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

const OneTodo = ({ todo, todoList, setTodoList }) => {
 
  const [isEditMode, setIsEditMode] = useState(false);
  const todoContentInput = useRef(null);

  const onEditTodo = async () => {
    if (!isEditMode) return setIsEditMode(true);
    if (window.confirm("정말 수정하시겠습니까?")) {
        const res = await TodoApi.updatTodo({
          id: todo.id, 
          content: todoContentInput.current.value,
          state: todo.state
        })
      const _toodList = [...todoList]; 
      const updateTodo = [..._toodList].find((el) => el.id === res.data.id);
      updateTodo.content = todoContentInput.current.value;
      setTodoList(_toodList);
      setIsEditMode(false);
    }
  };

  const onDeleteTodo = async() => {
    const res = await TodoApi.deleteTodo({id: todo.id}) // 삭제한 todo의 id
    const deleteTodo = todoList.filter((el) => el.id !== res.data);
    setTodoList(deleteTodo);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <FontAwesomeIcon icon={faCheck} />
        <S.Title>
          <div>{todo.title}</div>
          <FontAwesomeIcon icon={faPen} onClick={onEditTodo} />
          <FontAwesomeIcon icon={faBan} onClick={onDeleteTodo} />
        </S.Title>
      </S.Header>
      <S.Content>
        {isEditMode ? (
          <textarea
            defaultValue={todo.content}
            ref={todoContentInput}
          ></textarea>
        ) : (
          todo.content
        )}
      </S.Content>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.COLORS.gray[100] : theme.COLORS.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#3CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};


/* 
클라이언트 수정 request ---> 백엔드 ---> db data update --> updated todo`s id response 
------> response -> 클라이언트 -> id setState
(사용자는 성공했다는 가정하에 데이터를 빠르게 전달 받을 수 있음)
(백엔드와의 데이터가 일치하는지 확신할 수 없게 됨)

ex) 
  setIsLiked(true)
  try {
  const res = axios.post('/liekd')
  } catch(error) {
    setIsLiekd(false)
  }

----> requset getTodo ---> 백엔드 -> db -> todos ---> response -> 클라이언트
(백엔드와의 데이터가 항상 일치하기 때문에, 사용자는 동기화 된 데이터를 확인할 수 있음)
(다시 백엔드에 reqeust를 보내기 때문에 사용자가 눈에 보기까지에 시간이 소요)
*/