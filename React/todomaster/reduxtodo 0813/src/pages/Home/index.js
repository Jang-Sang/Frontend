import styled from "styled-components";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { flexCenter } from "styles/common.style";
import { useState } from "react";

export const HomePage = () => {
  // let isFormLogin = true;
  const [isFormLogin, setIsFormLogin] = useState(true);

  const onChangeForm = (e) => {
    const { innerText } = e.target; // === e.target.innerText
    if (innerText === "SIGN-IN") return setIsFormLogin(true);
    return setIsFormLogin(false);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.SignInSelector isFormLogin={isFormLogin} onClick={onChangeForm}>
          SIGN-IN
        </S.SignInSelector>
        <S.SignUpSelector isFormLogin={isFormLogin} onClick={onChangeForm}>
          SIGN-UP
        </S.SignUpSelector>
      </S.Header>
      {isFormLogin ? (
        <SignInForm />
      ) : (
        <SignUpForm setIsFormLogin={setIsFormLogin} />
      )}
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

const SignInSelector = styled.div`
  background-color: ${(props) => (props.isFormLogin ? "#e0e0e0" : "#f5f5f5")};
`;

const SignUpSelector = styled.div`
  background-color: ${(props) => (props.isFormLogin ? "#f5f5f5" : "#e0e0e0")};
`;

const S = {
  Wrapper,
  Header,
  SignInSelector,
  SignUpSelector,
};
