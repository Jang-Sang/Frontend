import { useEffect, useState } from "react";
import TimerModal from "./timer-modal";

function UseEffect() {
    const [isOpenTimerModal, setIsOpenTimerModal] = useState(false);

    useEffect(() => {
        if (!isOpenTimerModal) return;
        console.log(isOpenTimerModal);
    }, [isOpenTimerModal]);

    /**
     * 1) 페이지가 mount 되었을 때 실행 = window.onload
     * 2) state는 비동기로 동작 -> state 변화 이후 실행할 effect(함수,기능) 관리
     * 3) 페이지가 unmount 되었을 때는 return을 사용하여 컴포넌트가 DOM에서 제거 되었을 때
     *    실행 할 effect를 관리
     */

    return (
        <div>
            {isOpenTimerModal && <TimerModal />}
            <button
                onClick={() => {
                    setIsOpenTimerModal((prev) => !prev);
                }}
            >
                실행
            </button>
        </div>
    );
}
export default UseEffect;
