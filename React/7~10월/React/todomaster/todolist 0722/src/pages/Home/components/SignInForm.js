const SignInForm = () => {
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
      <button>로그인</button>
    </form>
  );
};
export default SignInForm;

// 가독성과 재사용성을 위해서 components에 나눠서 만든다.
// 기존 form태그 가져와서 그대로 옮긴것
