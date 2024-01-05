import { useMemo, useRef, useState } from "react";

const UseMemo = () => {
  const arr = useRef([1, 2, 3, 4]);
  const [forceRender, setForceRender] = useState(false);

  // useMemo(콜백함수, [])  => 콜백함수가 들어가고 , 배열 순으로 넣는다.
  // 랜더링 되어도 처음 페이지가 열렸을 때 1회만 실행, 실행 x
  // 리엑트 live-server 용도로 수정 사항을 즉각 확인하기 위해서는 새로고침
  const memoCount = useMemo(() => {
    arr.current.push(arr.length + 1);
    return arr.current.length; // 4->5  // 한번더 했을때 5->6
  }, [forceRender]);
  // 의존성 배열에 값이 없으면 페이지가 처음 열렸을 때
  // 의존성 배열에 값이 있으면 페이지가 처음 열렸을 때 + 의존성 배열의 값이 변경되었을 때
  // return, 재연산x

  return (
    <div>
      <h2>useMemo</h2>
      <p>{memoCount}</p>
      <button onClick={() => setForceRender((prev) => !prev)}>render</button>
    </div>
  );
};
export default UseMemo;

// render를 누르면 강제로 리랜더링 값이 5 이므로 1,2,3,4,4  6이 된다면 1,2,3,4,4,5
// 강제로 값을 유지하면서 1이 증가하므로 5가 나온다