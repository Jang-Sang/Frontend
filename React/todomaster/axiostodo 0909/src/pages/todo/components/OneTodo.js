import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { useRef, useState } from "react";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

const OneTodo = ({ todo, todoList, setTodoList }) => {
  // todo 객체가 없다, 부모한테 존재(index.js)
  // 부모에게서 props(속성)를 전달 받아 사용할 수 있습니다
  // 부모에게서 속성=속성값으로 데이터를 전달하고 자식 컴포넌트에서는 매개변수로 받는다

  const [isEditMode, setIsEditMode] = useState(false);
  const todoContentInput = useRef(null);

  // UI가 변경되지 않아요(textarea가 변경되는 것) > so, rendering시킬 필요가 없음 >> 최적화 고민
  // const [editTodoContent, setEditTodoContent] = useState(todo.content);
  // const onChangeTodoContent = (e) => {
  //   setEditTodoContent(e.target.value);
  // };

  //edit
  const onEditTodo = () => {
    if (!isEditMode) return setIsEditMode(true);
    if (window.confirm("정말 수정하시겠습니까?")) {
      // 01. todoList 불러오지 않고 하기
      // setTodoList(내가 특정한 수정값이 적용된 todoList 배열)
      // setTodoList((todoList) => {
      //   const updateTodo = todoList.find((el) => el.id === todo.id);
      //   updateTodo.content = todoContentInput.current.value;
      //   return todoList;
      // });
      // setIsEditMode(false);

      //02. todolist 불러오고 가독성 좋게 작성하기
      const _toodList = [...todoList]; // 리렌더링 하기 위해서 복사본 ㄱ ㄱ
      const updateTodo = [..._toodList].find((el) => el.id === todo.id);
      updateTodo.content = todoContentInput.current.value;
      setTodoList(_toodList);
      setIsEditMode(false);
    }
  };

  /* delete 구현 todo.id , filter */
  const onDeleteTodo = () => {
    // setTodoList(해당 데이터가 삭제된 배열)
    // 배열엥서 특정 요소를 삭제하는 방법 -> splice, slice, filter, pop
    // 뭐가 필요한지 -> 새로운 배열 -> filter
    const deleteTodo = todoList.filter((el) => el.id !== todo.id);
    setTodoList(deleteTodo);
  };

  // console.log(todo);
  /*
    { <-- 객체
        todo: {
            ...
        }
    } 
  */

  /*
    npm i @fortawesom/react-fontawesome @fortawesome/free-solid-svg-icons
    */
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
