import SJButton from "components/Button";
import AddTodoModal from "./components/AddTodoModal";
import { flexAlignCenter, flexCenter } from "styles/common.style";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./components/TodoList";
import useModal from "hooks/use-modal";

const TodoPage = () => {
  const {
    state: isOpenAddTodoModal,
    onHiddenModal,
    onVisibleModal,
  } = useModal();
  // custom hooks
  // 재사용 가능한 커스텀 훅을 만들어 다른 모달에서 상태 관리를 재사용
  // 코드가 줄어들고 유지 보수 용이

  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal onClose={() => onHiddenModal()} />}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <TodoList />
          <S.ButtonBox>
            <SJButton
              variant={"primary"}
              size={"full"}
              onClick={() => onVisibleModal()}
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
};
