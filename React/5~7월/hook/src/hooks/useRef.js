import { useState } from "react";
import { useRef } from "react"

function UseRef(){
    const count = useRef(0);
    const htmlRef = useRef(null);
    // ref는 reference의 약자로써 참조라는 뜻이다.
    // useRef에 담기는 값은 객체로서 cureent 속성에 담긴다
    // 리랜더링 되어도 값을 유지(캐싱), 상태는 아니기에 ref의 값이 변해도 리랜더는 되지 않음
    // 변경되면 안되는 값을 저장해두기 좋은 변수 선언문

    
    const [forceReRender, setForceReRender] = useState(true);


    const onChnageUseRef = () => {
        htmlRef.current.style.color = 'red';
        count.current += 1;
    }


    const onForceReRender = () => {
        setForceReRender((prev) => !prev)
    }

    console.log(count.current)

    return (
        <div>
            {forceReRender && <div>SHOW</div>}
            <div ref={htmlRef}>COLORS</div>
            <button onClick={onChnageUseRef}>카운트 추가</button>
            <button onClick={onForceReRender}>리랜더링</button>
        </div>
    )
}
export default UseRef