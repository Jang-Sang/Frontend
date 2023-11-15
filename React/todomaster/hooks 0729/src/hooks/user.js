import { useRef, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "장상준",
    },
    {
      id: 2,
      name: "김사과",
    },
  ]);

  const useInput = useRef(null);

  /* 
    CRD (Crate, Read, Delete)
    1. users를 순회하여 반복되는 ui 처리하여 조회 (o)

    2. 이름을 사용자가 입력하여 추가 버튼을 누르면 상태가 업데이트 되어 새로운 사용자(UI)를 추가
    단 id는 중복되어서는 안된다.
    (state에서 객체의 값을 바꾸려면 어떻게 해아할까?, 객체 저장 방식, 주소값 => 깊은 복사와 얕은 복사)

    3. 각 유저마다 삭제가 존재하며 삭제 버튼을 누르면 해당 사용자는 삭제
  */

  const onAddUsers = () => {
    /* 
    0. 여기부터는 설계가 필요하다.

        1. 여러분이 구현하고 싶은 최종 형태 - 무조건 항상 생각해야한다. 이게 제일 먼저
        setUser(새로운 유저가 추가된 배열)

        2. 새로운 유저
        input의 value가 필요, 배운 것이 지금은 ref 밖에 없어서 ref로 가지고오겠지만, 더 좋은 방법
    
        상태는 setUser만을 이용해서 바꿀 수 있다.
        */
    const userName = useInput.current.value;
    // 새로운 배열을 선언

    // 1. 전개 연산자를 활용한 복사 ( 깊은 복사, 중첩 객체배열에서는 깊은 복사x ) 현재는 참고만 하는 것
    // 안에 있는 요소는 복사하되 주소값을 다르게 지정
    // 얕은 복사는 안에 내용물만 복사해 오는 것
    /*  
        ex)
        const arr = [ 1,2,3,4,5 ]
        console.log(...arr) // 1,2,3,4,5
        console.log([...arr]) // [1, 2, 3, 4, 5], 배열을 새로 생성했기에 주소값도 달라요

        const user = {
            id: 1,
            name: "김성용"
        }
        console.log(...user) // id:1, name:김성용
        console.log({...user}) // { id:1, name:김성용 }
    */

    setUsers([
      ...users,
      { id: Math.floor(Math.random() * 100000), name: userName },
    ]);
  };

  /* 삭제는 깊은 복사를 할 필요가 없어요, filter만으로 이미 새로운 배열이 선언되기 때문에 */
  const onDeleteUser = (id) => {
    console.log(id);
  };

  return (
    <>
      {users.map((user) => (
        <div>
          {user.id}. {user.name}
          <button onClick={() => onDeleteUser(user.id)}>삭제</button>
        </div>
      ))}
      <input ref={useInput} />
      <button onClick={onAddUsers}>추가</button>
    </>
  );
};
export default User;
