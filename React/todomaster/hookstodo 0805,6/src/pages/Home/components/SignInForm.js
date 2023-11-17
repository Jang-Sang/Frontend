import SJButton from "components/Button";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SJInput from "components/Input";
import useInputs from "hooks/use-inputs";
import { formValidate } from "utils/validate-helper";

const SignInForm = () => {
  const navigate = useNavigate();

  /* 
    1. 사용자가 텍스트를 입력했을 때 유효성을 통과 여부에 따라 UI가 바뀜
    2. 사용자가 유효성 검사를 틀렸을 때나 틀리지 않았을 때만 검사하는 방법 -> react-hook-form 
    3. 사용자가 입력할 떄 마다 랜더링을 일으켜 유효성을 통과했는지 확인하는 방법 -> useState, onChange
  */

  const [{ email, password }, onChangeInputs] = useInputs({
    email: "",
    password: "",
  });

  const { disabled, errors } = formValidate({ email, password });

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "test") {
      return navigate("/todo");
    }
    alert("아이디와 비밀번호를 다시 한번 확인해주세요");
  };

  /* 
    유효성검사 과제 (내가 만든 규칙을 통과했는지)
      난이도 어려운 편, 실제로 각 조에 1~2명 완성하면 다행 -> 수업 시간에 풀이

      이메일은 @가 반드시 포함된 상태여야하고 비밀번호는 8자리 이상이어야한다.
      만약 해당 조건이 만족되지 않는다면 버튼은 disabled 상태고 유효성을 실시간으로 감지하여
      해당 인풋 아래 에러 메세지로 나타내야한다.

      hint -> input의 변화를 실시간으로 감지하여 화면을 리랜더해야한다. (에러 메세지)
      
      1) 위에 조건 만족해서 기능만 가능하도록 하기 (useEffect, useState, onChange) --- o
      2) 중복되는 UI를 하나로 합치기, 에러메세지를 포함한 Input (components)
      선택) 회원가입에서도 재사용이 가능한 hooks 함수 만들기 (custom hooks)
      
      심화) 모든 것을 최적화 하기 위한 react-hook-form 라이브러리 사용해보기, 랜더링 최적화 (실무에서 가장 많이 사용하는 form 라이브러리)
  */

  return (
    <S.Form onSubmit={onSubmitSignIn}>
      <SJInput
        label="이메일"
        type="text"
        name="email"
        onChange={onChangeInputs}
        placeholder="이메일을 입력해주세요"
        error={errors.email}
      />
      <SJInput
        label="비밀번호"
        type="password"
        name="password"
        onChange={onChangeInputs}
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
      />
      <SJButton
        variant={"primary"}
        size={"full"}
        shape={"shape"}
        disabled={disabled}
      >
        로그인
      </SJButton>
    </S.Form>
  );
};
export default SignInForm;
