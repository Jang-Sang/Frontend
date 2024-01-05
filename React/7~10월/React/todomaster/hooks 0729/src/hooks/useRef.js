import { useRef, useState } from "react";

const UseRef = () => {
  // 리랜더링이라고 하는 것은 랜더함수(UseRef)를 다시 실행한다는 것이고
  // 여러분들인 선언한 함수와 변수는 다시 선언된다
  // 따라서 그전의 값이 몇이었던 일반 변수는 값이 초기화되어 기본 값으로 돌아갑니다
  // 그러나 state와 ref는 값이 초기화되지 않고 유지되는 성질
  
  // 1-2-3-hide-1
  //   let count = 0;
  const count = useRef(0);
  // useRef로 선언된 것은 상태가 아니기에 변화되어도 리랜더링 되지 않습니다, 애는 단순히 값만 유지
  const domRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  const onAddNumber = () => {
    count.current++;
    // useRef로 선언된 값은 current 객체 안에 저장
    console.log(count);
  };

  const onShowTadaBtn = () => {
    setIsShow((prev) => !prev);
    // 현재값이 false => true, true => false
    // t, f, t, f, t, f
  };

  const onChangeColors = () => {
    domRef.current.style.color = "red";
    // document.querySelector("#domRef").style.color = "red"
    // dom에 대한 접근은 최대한 '지양', 그러나 일부 이벤트 리스너 및 라이브러리 사용을 위해 사용해야만하는 경우가 있음
  };

  return (
    <div>
      <h2>useRef</h2>
      {isShow && <div>Tada!</div>}
      <button onClick={onAddNumber}>+</button>
      <button onClick={onShowTadaBtn}>{isShow ? "hide" : "show"}</button>
      <div ref={domRef}>COLORS</div>
      <button onClick={onChangeColors}>change</button>
    </div>
  );
};
export default UseRef;
