import { useState } from "react"

function UseState() {
    // let count = 0;
    let a = 0;
    const [count, setCount] = useState(0);
    // 배열 리턴 값을 구조분해할당으로 전달
    /**
     *  const, let [변수명, 바꿀 수 있는 순수 함수] = useState(기본 값)
     *  const/let 변수명 = 기본 값;
     */

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