//커스텀 훅 파일은 앞에다가 use를 붙여서 만든다
/* 커스텀 훅이란?
훅을 사용하고 있는 재사용 가능한 로직을 모듈화한 것
반복되는 비즈니스 로직을 분리하는 것

재사용되지 않을 훅을 커스텀 훅으로 만드는 것을 옳을 까요? 올지 않을 까요?
=> 옳지 않은데 옳다. 커스텀 훅을 파일로 만드는 것은 ui와 비즈니스 로직을 분리한다는소리
나중에 test 파일을 쓸 때 편하긴 하다. 근데 옳지 않다.
 */

//구조 분해 할당 사용
import { useState } from "react";

//email, password 등 다양한 input에 사용한다.
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
};
export default useInput;

//구조분해 할당 사용 가능
//const [email, onChangeEmail, setEmail] = useInput() //[value, onChange, setValue]
//const [password, onChangePassword, setPassWord] = useInput() //[value, onChange. setValue]
//a,b에서는 value는 다르다.
//hook함수를 사용하고 있는 재사용해야 하는 로직을 만들때 custom hook을 사용한다.
