import SJButton from "components/Button";
import AddTodoModal from "./components/AddTodoModal";
import OneTodo from "./components/OneTodo";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { styled } from "styled-components";

const TodoPage = () => {
  const isOpenAddTodoModal = true;
  // bool를 나타내는 변수 앞에는 is
  // todo 목록을 나타내는 카드는 UI는 똑같을까? -> 똑같다 -> react에서는 반복되는 UI를 어떻게 처리할까?
  const todoList = [
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
  ];
  // 이게 만약에 바닐라 JS(JavaScript) -> Dom Api, createElement

  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal />}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            {todoList.map((todo) => (
              /** html안에서 map의 결과 html return */
              <OneTodo todo={todo} />
            ))}
          </S.Content>
          <S.ButtonBox>
            <SJButton variant={"primary"} size={"full"}>
              추가
            </SJButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
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
