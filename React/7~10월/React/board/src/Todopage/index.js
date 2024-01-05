import AddTodoModal from "./components/AddTodoModal";
import OneTodo from "./components/OneTodo";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useState } from "react";

const TodoPage = () => {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todolist, setTodoList] = useState([
    {
      id: 1,
      content: content1,
      title: title1,
      name: a,
      state: false,
    },
    {
      id: 2,
      content: content2,
      title: title2,
      name: b,
      state: false,
    },
    {
      id: 3,
      content: content3,
      title: title3,
      name: c,
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
      }, 3000);
    });

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
    </>
  );
};
export default TodoPage;
