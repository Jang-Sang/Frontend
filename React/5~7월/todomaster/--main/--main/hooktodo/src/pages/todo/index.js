import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../components/Button/button";
import { flexCenter, flexAlignCenter } from "../../styles/global";
import styled from "styled-components";
import TodoAddModal from "./Modal/add-modal";
import TodoList from "./List/todo-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useModal from "../../hooks/use-modal";

//index.js는 추상체 : 어떻게 구성되어 있는지 알려주는 청사진, entry file이 보통 담당한다.
//OneTodo는 구현체 : 실제로 ui에 렌더링되는 태그, 실제 렌더링 되는 비즈니스 로직

//재사용될 가능성이 없는 변수는 안에다가 선언하는 것이 좋다.

const TodoPage = () => {
  //index.js에서 변수를 설정해 props로 전달하면 의존성을 낮추고
  //컴포넌트를 재사용할 수 있다는 장점이 있다.
  const params = useParams();
  console.log(params); //{todoId: '3'}
  //모달을 보여주는 것을 state로 만듦
  const [isModal, open, close] = useModal();

  const toastOption = {
    autoClose: 2000,
    theme: "colored",
  };
  //위의 변수를 ToastContainer에 속성으로 전달할 수 있다.
  //{...toastOption}으로 주면 된다.
  //위처럼쓰면 옵션을 다시 안쓰고 재사용이 가능하다.

  //add버튼을 눌렀을 떄 일어나는 일 : 백엔드에 데이터를 보내고 성공과 실패를 결정하는 일
  //promise로 객체를 만들고 resolve와 reject를 구현까지 해야 한다.
  //=> promise를 치면 promise를 어떻게 구현하는지가 나와있다.
  //react query알아보기 -> 요즘 대세인 스택?
  //sql aws 같은 자격증은 괜찮음..프론트엔드 자격증은 없음

  //index.js는 todoList라는 상태를 꼭 알아야 하는가? no
  //알 필요가 없다. 필요한 컴포넌트에서만 상태를 쓰면 좋다 .=> 전역 상태 관리
  const [todoList, setTodoList] = useState([
    { id: 1, title: "example1", content: "content1", state: false },
    { id: 2, title: "example2", content: "content2", state: false },
    { id: 3, title: "example3", content: "content3", state: false },
  ]);

  //비동기 함수 : 백에다 데이터를 전달할 때 reject가 발생할 수도 있다.
  const addTodo = (title, content) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          state: false,
          title,
          content,
        };
        resolve(newTodo);
      }, 1000)
    ).then((todo) => {
      console.log(`todo`, todo);
      setTodoList([todo, ...todoList]);
      close();
    });
  };

  //onAddTodo는 클릭하면 위에 토스트메세지가 뜨는 함수
  const showTodoToastMessage = (e) => {
    e.preventDefault();
    console.log(e);
    const title = e.target.title.value;
    const content = e.target.content.value;
    // toast("Wow so easy !");
    toast.promise(addTodo(title, content), {
      pending: "Todo loading",
      success: "Todo success",
      error: "Todo error",
    });
  };

  return (
    <>
      {isModal && (
        <TodoAddModal
          onClickCloseModal={close}
          onAddTodo={showTodoToastMessage}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </S.Content>
          <S.ButtonBox>
            <BasicButton
              variant={"primary"}
              size={"full"}
              onClick={open}
              type="button"
            >
              추가
            </BasicButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
      {/*공식문서를 보면 컴포넌트의 속성을 변경할 수도 있다.
      이 옵션은 위에다가 객체로 뺄수도 있다.*/}
      {/* <ToastContainer autoClose={2000} /> */}
      <ToastContainer {...toastOption} />
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
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

// const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
// toast.promise(
//     resolveAfter3Sec,
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// )

//커스텀 훅 만들기
// const onClickOpenModal = () => {
//   setIsModal(true);
// };

// const onClickCloseModal = () => {
//   setIsModal(false);
// };
