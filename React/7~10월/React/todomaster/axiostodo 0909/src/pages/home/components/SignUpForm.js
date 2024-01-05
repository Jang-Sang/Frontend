import JWButton from "components/Button";
import * as S from "./style";
import useInputs from "hooks/use_inputs";
import JWInput from "components/input";
import { formValidate } from "utils/vaildate-helper";
import axios from "axios";


/**
 * @params {setIsFormLogin}
 * @description
 * @note
 * @todo
 */
const SignUpForm = ({ setIsFormLogin }) => {

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


  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:9000/user/sign", {
        email,
        password
      })
      // Promise().then().catch() --> 동기처리와 예외처리
      alert('축하')
      setIsFormLogin(true)
    } catch(err){
      // console.error(err)
      alert(err.response.data.error)
      // setState ...
      // console을 찍는 용도로는 사용하지 않습니다. 
      // javscript의 최상단 에러 핸들링에는 console이 있음
      // 따라서 error를 핸들링 위해 필요한 것이 catch
    } 
    // axios의 post method의 두번째 인자에는 body data가 들어간다
  };


  return (
    <S.Form onSubmit={onSubmitSignUp}>
      <JWInput
        label={"이메일"}
        name="email"
        type="text"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeInputs}
        error={errors.email}
      />
      <JWInput
        label={"비밀번호"}
        name="password"
        type="password"
        placeholder="비밀번호 입력해주세요"
        onChange={onChangeInputs}
        error={errors.password}
      />
      <JWInput
        label={"비밀번호 확인"}
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인해주세요"
        onChange={onChangeInputs}
        error={errors.passwordConfirm}
      />
      <JWButton
        shape={"shape"}
        size={"full"}
        variant={"primary"}
        disabled={disabled}
      >
        회원가입
      </JWButton>
    </S.Form>
  );
};
export default SignUpForm;
