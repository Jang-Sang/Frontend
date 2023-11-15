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
        1. 여러분이 구현하고 싶은 최종 형태
        setUser(새로운 유저가 추가된 배열)

        2. 새로운 유저
        input의 value가 필요, 배운 것이 지금은 ref 밖에 없어서 ref로 가지고오겠지만, 더 좋은 방법
    */
    const userName = useInput.current.value;
    // 새로운 배열을 선언

    // 1. 전개 연산자를 활용한 복사 ( 깊은 복사, 중첩 객체배열에서는 깊은 복사x )
    // 안에 있는 요소는 복사하되 주소값을 다르게 지정
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
    // 결과값 -> 유저 삭제 후 화면이 랜더링
    // setUsers(특정 유저가 삭제된 배열)
    // 특정 유저가 삭제 된 배열? -> 배열에서 특정 요소 걸러내는 법 (filter)
    const deleteUsers = users.filter((user) => user.id !== id);
    setUsers(deleteUsers);
  };

  return (
    <>
      {users.map((user) => (
        <div>
          {user.id}. {user.name}
          <button onClick={() => onDeleteUser(user.id)}>삭제</button>
          {/* js -> parent/child/Node, attribute, addEventListener => x */}
        </div>
      ))}
      <input ref={useInput} />
      <button onClick={onAddUsers}>추가</button>
      {/*매개 변수가 없거나, click Event를 받아야한다면 콜백을 사용하지 않아도 됩니다 */}
    </>
  );
};
export default User;
