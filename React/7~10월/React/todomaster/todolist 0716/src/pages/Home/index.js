import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const name = "HOME-PAGE";
    const navigator = useNavigate()

    const onClickLocationBtn = (e) => {
        console.log(e.target)
        window.location.herf = "/todo"
    }

    const onClickLinkBtn = () => {
            navigator('/todo')
    }
    return (
    <React.Fragment> {/** <> </> */}
        <div>{name}입니다.</div>
        {/* <a herf="/todo"><button>location</button></a>
        <Link to={"/todo"}><button>router</button></Link> */}
        <button onClick={onClickLocationBtn}>location</button>
        <button onClick={onClickLinkBtn}>router</button>
    </React.Fragment>)
}    
export default HomePage 
// 기본 값으로 내보내다
// 더이상 dom api의 접근이 필요없다. dom api의 한계를 깨닫고 대체
// 한계가 있던걸 react팀에서 대체할 것을 추가함
// 함수의 state가 변화하는 곳만 다시 재실행한다.
// 자바스크립트는 전체가 재실행해야한다.
// 랜더링 시간은 줄어들지만 코스트 즉 비용이 많이 든다.


