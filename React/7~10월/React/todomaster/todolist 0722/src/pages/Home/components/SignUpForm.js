const SignUpForm = () => {
  return (
    <form>
      <p>
        <label>이메일</label>
        <input type="text" placeholder="이메일을 입력해주세요" />
      </p>
      <p>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
      </p>
      <p>
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호 확인" />
      </p>
      <button>회원가입</button>
    </form>
  );
};
export default SignUpForm;
