import SJButton from "components/Button";
import * as S from "./style";

const SignInForm = () => {
  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input type="text" placeholder="이메일을 입력해주세요" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
      </S.InputBox>
      <SJButton variant={"primary"} size={"full"} shape={"shape"}>
        로그인
      </SJButton>
    </S.Form>
  );
};
export default SignInForm;
