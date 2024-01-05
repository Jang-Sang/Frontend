// 컴포넌트가 아닌 일반 함수(모듈화) - **재사용을 위해서
// 제일 중요한것 - 한곳에서 관리하는 것

import { useState } from "react";

// 커스텀 훅 ->  훅 함수를 사용한 재사용 가능한 함수 -> 커스텀 훅
const useInputs = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return [value, onChange, setValue];
};
export default useInputs;

//ex
/* 
    const [{ email, password }, onChangeInputs] = useInputs({
    email: "",
    password: "",
  });
*/

// 의존성 역전 원칙 - a를 이용해서 c를 만들고 b가 c를 활용한다. - 모듈화를 이용해서 이를 해소할 수 있다.
// 훅함수가 들어간 모듈화!!