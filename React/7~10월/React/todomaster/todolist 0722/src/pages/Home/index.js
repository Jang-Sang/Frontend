import styled from "styled-components";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { flexCenter } from "styles/common.style";

export const HomePage = () => {
  let isFormLogin = true;

  //html안에 자바스크립트를 가져다가 사용할 수 있다.

  const onChangeForm = (e) => {
    console.log(isFormLogin);
    const { innerText } = e.target; // === e.target.innerText
    // 구조분해할당
    if (innerText === "SIGN-IN") return (isFormLogin = true);
    return (isFormLogin = false);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <div onClick={onChangeForm}>SIGN-IN</div>
        <div onClick={onChangeForm}>SIGN-UP</div>
      </S.Header>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
      {/** 레고처럼 블록을 쪼개서 만든 것 - 가독성을 위해서 나눔 */}
    </S.Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;
const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.primary[300]};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    width: 50%;
    ${flexCenter}
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const S = {
  Wrapper,
  Header,
};

// s.wrapper = 스타일된 컴포넌트
// 삼항연산자에 true/false를 줘 하면 전환을 한다.
