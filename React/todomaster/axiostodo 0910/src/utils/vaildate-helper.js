export const formValidate = ({ email, password, passwordConfirm }) => {
  let disabled = !email.includes("@") || password.lenght < 8;

  if (passwordConfirm) {
    disabled = disabled || password !== passwordConfirm;
  }

  let errors = {
    email: !email.includes("@") && "이메일 양식을 확인해주세요",
    password: password.length < 8 && "비밀번호는 8자리 이상이어야 합니다",
    passwordConfirm: password !== passwordConfirm && "비밀번호를 확인해주세요",
  };

  return { disabled, errors };
};
