/*
    1. context(저장소) 생성 --> createContext
    2. provider(표지), 해당 표지 안에 있는 자식 컴포넌트만 상태를 공유할 수 있음 (범위)
    3. 상태 생성 및 커스텀 훅 함수, 리듀서 생성
    4. 표지(provider)에 데이터를 담습니다.
    5. 담긴 데이터는 표지 안에 있는 모든 자식 컴포넌트는 사용 가능 (함수, 상태, ...)
    6. 각 컴포넌트마다 해당 컨텍스트를 사용하는 훅함수 --> useContext
    7. 내가 생성한 상태와 로직을 어디에서든 꺼내서 사용
*/

import { createContext, useContext, useState } from "react";

const UserContext = createContext(); // 1
export const useUser = () => useContext(UserContext); // 6

// 2
const UserProvider = ({ children }) => {
  // 3
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

  //1. onAddUser -> 의존성 주입
  //2. reducer -> redux 대비

  return (
    // 4
    <UserContext.Provider value={[users, setUsers]}>
      {children} {/* 5 */}
    </UserContext.Provider>
  );
};
export default UserProvider;
