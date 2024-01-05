import { useReducer, useState } from "react";
import { countReducer } from "../../reducer/count";

const Count = () => {
  /*
    useReducer
    전역상태관리 x -> useContext
    useContext와 함께 자주 사용
    => 왜?

    useReducer?
    로직(코드, 기능)의 재사용 -> 모듈화 -> state
    커스텀 훅과 다른 점이 있다면 dispatch를 이용하여 데이터를 전달하여 상태를 변경
    따라서 사용할 때 마다 로직을 작성하지 않아도 dispatch로 전달된 값에 따라 작성해둔 로직을 실행
   */

  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  // reducer로 상태 생성 구조분해 할당이므로 이름은 마음대로
  // 그러나 action의 type,payload와 마찬가지로 dispatch는 리덕스에서 사용 중이므로
  // 두번째 요소는 dispatch로 하는 것이 좋음

  const onAddCount = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
    // setCount(count + 1);
    // => 커스텀 훅을 생성하지 않아도 비즈니스 로직을 재사용 할 수 있으며
    // 언제 어디서든 dispatch를 통해 store에 action을 전달하여 원하는 로직을 실행
    // 연산은 reducer에서
  };

  return (
    <div>
      {count}
      <button onClick={onAddCount}>+</button>
    </div>
  );
};
export default Count;
