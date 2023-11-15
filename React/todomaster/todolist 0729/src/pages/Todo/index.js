import SJButton from "components/Button";
import AddTodoModal from "./components/AddTodoModal";
import OneTodo from "./components/OneTodo";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// 공식 문서 꼭 참조할 것, 남이 만든 코드 => 가이드 따르지 않으면 적용되지 않음

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

  // backend와 데이터 통신을 유사하게 구현하기 위한 빈 껍데기뿐인 promise(비동기)
  // todo를 추가하면 성공할 수도 있고 실패할 수도 있죠
  // 그러니까 이 상태에 따라 다른 toast message를 보여주기 위함 => 강제 비동기 환경 조성
  // => 대기, 성공, 실패 상태 나누려고!
  const onAddTodo = new Promise((resolve) => {
    setTimeout(() => resolve("todo"), 3000 /* 3초 대기 */);
  });

  // 버튼을 눌렀을 때 토스트 메시지가 뜨는 함수 => 어떤 버튼? AddTOdoModal Add 버튼
  // 그러나, 해당 함수는 향후 훅함수 이용에 있어서 반드시 index.js에 작성되어야한다.
  // 따라서, 부모에서 생성한 함수를 props로 전달하여 AddTodoModal에서 사용
  // => 함수 생성해서 자식 컴포넌트에 전달, 데이터의 형태는 객체든 함수든 상관 없이 전달이 가능하다
  const showToastMessage = (e) => { //showToastMessage는 클릭 이벤트
    e.preventDefault();
    toast.promise(onAddTodo, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  };
  // react 홈페이지에서 toast메세지 복사해와서 붙여넣기
  // toast import 해주고, 그 위에 onAddTodo 넣기
  // Todo - component(modal,todo) -> index.js(부모)
  // props는 함수도 전달할 수 있다

  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal onAddTodo={showToastMessage} />}
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
