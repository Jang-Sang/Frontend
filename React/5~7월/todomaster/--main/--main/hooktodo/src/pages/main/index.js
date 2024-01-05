import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/global";
import SignInForm from "./components/SignIn";
import { PALETTE } from "../../styles/theme";
import SignUpForm2 from "./components/Signup2";

const MainPage = () => {
  //state가 아니기 떄문에 t/f 변화에 따른 재렌더링은 일어나지 않는다.
  const [isFormLogin, setIsFormLogin] = useState(true);
  console.log(isFormLogin);
  const onClickFormHeader = (e) => {
    //구조분해 할당 문법
    //const innerText = e.target.innerText 와 동치
    const { innerText } = e.target;
    if (innerText === "Login") return setIsFormLogin(true);
    setIsFormLogin(false);
  };

  return (
    <S.Container>
      <S.Header>
        {/*isFormLogin을 props상태로 전달한다. */}
        <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          Login
        </S.LoginHeader>
        <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          Sign
        </S.SignUpHeader>
      </S.Header>
      {/*FormLogin상태에 따라 다른 컴포넌트를 보여준다.*/}
      {/*setIsFormLogin을 props로 전달하여 회원가입이 완료되면 이 상태를 바꿀 수 있게 함*/}
      {isFormLogin ? (
        <SignInForm />
      ) : (
        // <SignUpForm setIsFormLogin={setIsFormLogin} />
        <SignUpForm2 setIsFormLogin={setIsFormLogin} />
      )}
    </S.Container>
  );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  /* justify-content: center;
  align-items: center; */
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  //전역적으로 app.js에서 themeProvider로 보낸 theme객체를 콜백함수로 사용할 수 있다
  //css속성에서 js객체를 사용하는 문법이다.
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  /* background-color: ${PALETTE.primary[300]}; */
  //Header 밑에 있는 div의 css
  div {
    ${flexCenter}
    width: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#f5f5f5" : "#e0e0e0"};
`;

const SignUpHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#e0e0e0" : "#f5f5f5"};
`;

//style component를 일반 컴포넌트와 구분하기 위해 S로 객체화
const S = {
  Container,
  Header,
  LoginHeader,
  SignUpHeader,
};

// export default S;

//styled-component는 변수를 속성으로 전달받아
//해당 변수 값에 따라서 스타일을 조정할 수 잇다
//style 변경을 위해 DOM API에 접근할 필요가 없
