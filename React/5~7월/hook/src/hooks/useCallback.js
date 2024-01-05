import { useCallback, useState } from "react";

function UseCallback() {
    const [count, setCount] = useState(0);

    const onAddNumber = useCallback(() => {
        console.log("test");
        setCount(count + 1);
    }, [count]);

    const onMinusNumber = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    /* 
    리랜덩 시에
    함수의 로직 및 연산에 필요한 데이터에 변화가 없다면
    해당 함수는 다시 재선언 될 필요가 있을까요 ?

    메모리(캐싱) -> 코스트
    */

    return (
        <div>
            <button onClick={onAddNumber}> + </button>
            {count}
            <button onClick={onMinusNumber}> - </button>
        </div>
    );
}
export default UseCallback;
