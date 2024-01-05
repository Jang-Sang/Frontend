import { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const onAddNumber = useCallback(() => {
    setCount(count + 1);
    // setCount(0 + 1)
  }, [count]);
  // 랜더링 되어도 처음에 생성되었던 값이 그대로 유지, 다시 선언하지 않으니까!
  // 의존성 배열의 값이 바뀔 떄 마다 다시 선언
  // 처음 환경 기억, 다시 선언x, 일반 함수랑 똑같음

  // useMemo와 useCallback 모두, 메모이제이션을 위해서 탄생했으며, 캐싱되어있는 값을 재사용
  // 단, 캐싱 시점은 개발자의 의도에 따라 변경이 가능

  return (
    <div>
      <h2>useCallback</h2>
      <p>{count}</p>
      <button onClick={onAddNumber}>+</button>
    </div>
  );
};
export default UseCallback;
