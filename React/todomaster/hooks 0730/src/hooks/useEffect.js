import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    // 컴포넌트가 처음 랜더링 되었을 때 실행할 문장
    console.log("start");
    return () => {
      // 해당 컴포넌트가 랜더링 트리에서 사라졌을 때 실행할 문장
      console.log("end");
    };
  }, []);
  // 의존성 배열, 해당 배열내의 값이 바뀌었을 때 console.log("start")를 다시 실행

  // 그럼 보통 언제 쓰냐
  // 1. 페이지가 처음 로드 되었을 때 호출 (백엔드에서 데이터 가져오기, 이벤트)
  // 2. setState -> 비동기 -> 동기적 함수 작성 x, state 값이 변경되었을 때 해당 state 값을 이용한 함수

  /* 
    useEffect(()=>{
        console.log(count) // 이미 바뀐 count 값이 사용 가능
        // 변경된 state의 값을 사용하여 로직을 구성하기 위해 useEffect
    },[count])
  */
    // 원래는 비동기라서 바뀌기 전에 함수가 실행되서 쓸 수 있는 방법이 없었는데,
    // useEffect를 사용하게 되면 count가 바뀌었을 때 바뀐 값을 사용할 수 있다.
  return <div>:)</div>;
};
export default UseEffect;
