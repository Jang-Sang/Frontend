react가 화면을 랜더링하는 시점
react -> 상태가 변경되었을 때 -> 가상돔 : 실제돔 -> 상태가 변화된 컴포넌트를 리랜더링

class
class Todoapge {
...
}
라이프사이클 (생애주기) ---> hook 함수

1. useState

   - react의 상태관리 함수
   - state의 생성 및 갱신이 가능
   - state의 값이 변화하면 해당 컴포넌트를 리랜더링 (해당 컴포넌트 함수를 재실행)

2. useRef

   - ref 객체 내부 값은 reneder와 상관없이 유지
   - html(실제돔)의 요소에 접근하기 위해서도 사용
     그런, react에서 DOM API의 접근을 사용하는 것을 지양

3. useMemo

   - 연산된 *결과*를 캐싱하고 저장
   - 화면이 다시 리랜더링 되어도 연상 과정을 거치지 않고 해당 값을 재사용

4. useCallback

   - 특정 함수를 캐싱, 화면이 다시 리랜더링 되어도 재선언하지 않고 재사용
   - 가독성 + 성능을 위해 콜백함수를 유즈콜백으로 사용하는 경우

   메모이제이션(메모아이제이션, 메모라이제이션)

   캐싱(저장)
   리엑트에서 어떤 함수가 선언되거나 연산하는 과정을 오래걸린다 (3초)
   그렇다면 리엑트는 리랜더링 할 때 마다 이 연산을 다시 해야합니다.

5. useEffect

   - 마운트/언마운트/부수효과 (state가 변하고 나서 생기는 사이드 이펙트)

   - 의존성배열
     해당 배열 내부의 state 값 혹은 값이 변경되면 해당 이펙트(함수)를 재실행

- useState

import { useState } from "react"

function UseState() {
// let count = 0;
let a = 0;
const [count, setCount] = useState(0);
// 배열 리턴 값을 구조분해할당으로 전달
/\*\*
_ const, let [변수명, 바꿀 수 있는 순수 함수] = useState(기본 값)
_ const/let 변수명 = 기본 값;
\*/

    const handleAddaNumber = () => {
        setCount(count + 1);
        a = 10;
        // console.log(count)
    }

    const handleMinusNumber = () => {
        setCount(count - 1)
        // console.log(count)
    }
    console.log(count)
    console.log(a)

    return (
        <div>
            <button onClick={handleAddaNumber}>+</button>
            {count}
            <button onClick={handleMinusNumber}>-</button>
        </div>
    )

}
export default UseState
