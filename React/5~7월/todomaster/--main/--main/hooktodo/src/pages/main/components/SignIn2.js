import { useNavigate } from "react-router-dom";
import BasicButton from "../../../components/Button/button";
import * as S from "../style";

const SignInForm = (e) => {
  const navigation = useNavigate();
  e.preventDefualt();
  console.log(e.target.email.value);

  const onPressSignIn = () => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "test" && password === "testtest") {
      navigation("todo/1");
      //      navigation("todo/1",);
    }
    return alert("아이디와 비밀번호를 확인해주세요");
  };

  return (
    <>
      {/*onSubmit에다가 붙여줘야 한다!!*/}
      <S.Form>
        <S.InputBox>
          <label>이메일</label>
          <input />
        </S.InputBox>
        <S.InputBox>
          <label>비밀번호</label>
          <input />
        </S.InputBox>

        <BasicButton onClick={onPressSignIn}>로그인</BasicButton>
      </S.Form>
    </>
  );
};
export default SignInForm;
