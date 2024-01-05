import { useEffect, useState } from "react";

function TimerModal() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("timer mount!");
        let intervarl = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervarl);
            console.log("timer unmount!");
        };
    }, []);

    /* 
        useEffect와 useMemo의 가장 큰 차이점은
        값을 캐싱하느냐이다

        만약 특정 값 캐싱을 위해 ref와 effect를 사용하면
        메모리 및 퍼포먼스의 낭비(누수) 따라서 내가 특정한 값을
        연산하여 캐싱하고 싶을 때는 useMemo를 사용하는 것이 좋다
    */

    return <div>{count}</div>;
}
export default TimerModal;
