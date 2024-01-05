// 컴포넌트가 아닌 일반 함수(모듈화)

import { useState } from "react";

// 커스텀 훅 -> 훅 함수를 사용한 재사용 가능한 함수  -> 커스텀 훅
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

// ex)
// const [{ email, password }, onChangeInputs] = useInputs({
//     email: "",
//     password: "",
//   });

//   const onChangeInputs = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   useEffect(() => {}, [email, password]);
