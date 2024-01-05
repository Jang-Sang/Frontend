import { useState } from "react";

const UseState = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  // 구조분해할당으로 각 index마다 내가 원하는 변수명 지정이 가능
  // const [상태명, 상태를 바꿀 수 있는 순수함수] = useState(기본값)
  // 리엑트의 상태는 재할당이 불가능하며, 오로지 두번째 매개변수로 전달받은 set 함수로만 변경이 가능하다

  const onAddNumber = () => {
    // count++;
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    console.log(count);
    // 0 --> 주의사항 set은 비동기이기 때문에 같은 로직 안에서 값이 변했을거라 생각하고 동기적으로 작성 xx
    // 값은 상승하고 있지만 UI에 적용되지 않는 상태
    // + 버튼을 누를 때마다 UI를 변경시켜주려면 어떻게 해야할까?
    // count -> 상태로 전환
    // prev 이전의 란 단어로 현재의 값을 나타낼때 많이 사용한다.
  };

  // state 관한 이론은 이게 전부다. 그리고 제일 중요하다.
  /* 
    1. state는 setState 함수로만 변경이 가능하다
    2. state가 변해야만 리엑트는 화면을 리랜더링 한다(UI를 다시 그려준다)
    3. setState 함수는 비동기 이기 때문에 함수 작성 시 유의해야한다
    4. setState 매개변수에는 콜백함수가 올 수 있으며, 콜백함수의 매개변수는 이전(현재)값이 오게 된다.
  */

  return (
    <div>
      <h2>useState</h2>
      {count}
      <button onClick={onAddNumber}>+</button>
    </div>
  );
};
export default UseState;
