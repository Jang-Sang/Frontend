export const formValidate = ({ email, password, passwordConfirm }) => {
  let disabled = !email.includes("@") || password.length < 8;

  if (passwordConfirm) {
    disabled = disabled || password !== passwordConfirm;
  }

  let errors = {
    email: !email.includes("@") && "이메일 양식을 확인해주세요",
    password: password.length < 8 && "비밀번호는 8자리 이상이어야합니다",
    passwordConfirm: password !== passwordConfirm && "비밀번호를 확인해주세요",
  };

  return { disabled, errors };
};


// hook 함수가 될 수 없는 재사용 가능한 모듈들을 util에 모아서 작성
