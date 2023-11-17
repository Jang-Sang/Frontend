import JWButton from "components/Button";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import JWInput from "components/input";
import useInputs from "hooks/use_inputs";
import { formValidate } from "utils/vaildate-helper";
import axios from "axios";
const SignInForm = () => {
  const navigate = useNavigate();

  const [{ email, password }, onChangeInputs] = useInputs({
    email: "",
    password: "",
  });

  const { disabled, errors } = formValidate({ email, password });

  const onSubmitSignIn = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:9000/user/login", {
        email,
        password
      })
      localStorage.setItem("access_token", res.data.data.token)
      if(localStorage.getItem("access_token")){
        navigate('/todo')
      }
    }catch(err){
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요");
    }
  };


  return (
    <S.Form onSubmit={onSubmitSignIn}>
      <JWInput
        label="이메일"
        type="text"
        name="email"
        onChange={onChangeInputs}
        placeholder="이메일을 입력해주세요"
        error={errors.email}
      />
      <JWInput
        label="비밀번호"
        type="password"
        name="password"
        onChange={onChangeInputs}
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
      />
      <JWButton
        variant={"primary"}
        size={"full"}
        shape={"shape"}
        disabled={disabled}
      >
        로그인
      </JWButton>
    </S.Form>
  );
};
export default SignInForm;
