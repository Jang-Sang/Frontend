import SJButton from "components/Button";
import AddTodoModal from "./components/AddTodoModal";
import OneTodo from "./components/OneTodo";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const TodoPage = () => {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "example-todo-1",
      content: "example-todo-1",
      state: false,
    },
    {
      id: 2,
      title: "example-todo-2",
      content: "example-todo-2",
      state: false,
    },
  ]);

  const onAddTodo = (title, content) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTodoList([
          {
            id: Math.floor(Math.random() * 100000),
            title,
            content,
            state: false,
          },
          ...todoList,
        ]);
        setIsOpenAddTodoModal(false);
        resolve();
        // 전개 연산자 사용해야하는 이유?
        // react의 상태는 참조값이 주소 값이 변경되어야만 객체 상태의 변화를 인지 -> 새로운 주소값이 담긴 배열
      }, 3000);
    });

  const showToastMessage = (e) => {
    e.preventDefault();
    const { title, content } = e.target;
    console.log(title, content);
    toast.promise(onAddTodo(title.value, content.value), {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  };

  return (
    <>
      {isOpenAddTodoModal && (
        <AddTodoModal
          onAddTodo={showToastMessage}
          onClose={() => setIsOpenAddTodoModal(false)}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            {todoList.map((todo) => (
              /** html안에서 map의 결과 html return */
              <OneTodo
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
          </S.Content>
          <S.ButtonBox>
            <SJButton
              variant={"primary"}
              size={"full"}
              onClick={() => setIsOpenAddTodoModal(true)}
            >
              추가
            </SJButton>
          </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme="colored" />
      </S.Wrapper>
      {/** 라이브러리는 사용법을 익힐 필요없이 다큐먼트를 보고 작성하는 것이 제일 좋습니다 */}
      {/** 다큐먼트를 보고 라이브러리 적용하는 연습이 중요하지, 사용법은 중요하지 않음 */}
      {/** 오늘 수업이 끝나면 토스트 메세지를 다큐먼트만 보고 적용하는 연습 */}
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.COLORS.primary[300]};
  color: ${({ theme }) => theme.COLORS.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};

//