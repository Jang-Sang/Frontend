import SJButton from "components/Button";
import * as S from "./style";
import useInputs from "hooks/use-inputs";
import SJInput from "components/Input";
import { formValidate } from "utils/validate-helper";

const SignUpForm = ({ setIsFormLogin }) => {
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    // 로그인으로 어떻게 보내지?
    alert("회원가입이 되었습니다. 축하합니다");
    setIsFormLogin(true);
  };

  const [{ email, password, passwordConfirm }, onChangeInputs] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { disabled, errors } = formValidate({
    email,
    password,
    passwordConfirm,
  });

  /* 
    단순 따라보고 만드는 것이 아니라, 코드를 따라가면서 왜 그렇게 되는지 생각해보고 질문 준비하기
    오늘 내용이 얼마나 중요한지 --> 단순 리엑트가 아니라 --> 프로그래밍 자체에서 굉장히 중요한 부분
    따라서 이 중요함을 아는 분은 해보세요
  */

  /*
    오늘은 개념의 문제가 왜?의 문제 -> 사고할 수 있는 부분 -> 개발자로서의 사고력

      1. 최소의 상태 -> 이게 과연 상태로서 존재해야하는가?
      2. 의존성 주입 -> 커스텀 훅 -> 유지보수 재사용성
      3. 유틸 함수를 통한 모듈화
    
    여러분들 개념은 검색해도 나와요 -> 잘 쓰고 싶어요 :)
    이 세가지 장점에 맞춰서 코드 분석 및 복습할 것
  */

  return (
    <S.Form onSubmit={onSubmitSignUp}>
      <SJInput
        label="이메일"
        name="email"
        type="text"
        onChange={onChangeInputs}
        placeholder="이메일을 입력해주세요"
        error={errors.email}
      />
      <SJInput
        label="비밀번호"
        name="password"
        type="password"
        onChange={onChangeInputs}
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
      />
      <SJInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        onChange={onChangeInputs}
        placeholder="비밀번호 확인"
        error={errors.passwordConfirm}
      />
      <SJButton
        shape={"shape"}
        size={"full"}
        variant={"primary"}
        disabled={disabled}
      >
        회원가입
      </SJButton>
    </S.Form>
  );
};
export default SignUpForm;
