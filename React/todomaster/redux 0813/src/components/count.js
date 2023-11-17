import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../reducer/count";

const Count = () => {
  /** 내가 원하는 상태를 가지고 오겠다. => redux는 여러가지 전역 상태를 한번에 관리하므로 그 중에서 원하는 것을 선택
   * useSelector가 왜 이름이 Selector가 들어가는지 생각해보면 좋다.
   */
  // 라이브러리를 만든 사람들도 개발자이다. 왜 이런식으로 이름지었는지 고민해보자
  const dispatch = useDispatch();

  const onPressIncrement = () => {
    dispatch({
      type: INCREMENT,
      payload: 1,
    });
  };

  // 0
  return (
    <div>
      {count}
      <button onClick={onPressIncrement}>+</button>
    </div>
  );
};
export default Count;
