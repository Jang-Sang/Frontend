import { useState } from "react";
import UserList from "./userList";
import AddUser from "./addUser";

const User = () => {
  /* 
    useContext
    리엑트에서 자체 지원하고 있는 전역 상태 관리 도구

    useReducer와 custom-hook은 재사용은 가능하지만, 각 컴포넌트마다 값이 유지되지 않기 때문에
    상태를 Props 전달해야하만 다른 컴포넌트에서 값을 공유할 수 있음

    값을 props로 전달해야하고 프롭스 드릴링이 생길 수 있음

    따라서 useReducer나 custom-hook을 통해 로직을 재사용하고
    상태를 전역으로 관리하여 어디서든 상태의 값이 프롭스로 전달되지 않아도 공유할 수 있는 도구

    ex)
        count + --> user +
    
    keyword
        props로 전달할 필요가 없다
*/

  return (
    <>
      <UserList />
      <AddUser />
      {/* 
        props로 전달은 되고 있지만 드릴링이 일어났는가? -> 1번 -> 드릴링? -> x
        전역 상태 관리가 필요할까요?

        => 개발자마다 관점이 다르지만, 필요하다
        독립적인 자식과 부주의한 부모 (independent child, careless parent)

        **
        index.js에 users라는 state는 UserList와 AddUser모두에게 props로 전달해야하기 때문에
        부모인 index.js는 몰라도 되지만 가지고 있는 값

        효도 -> 전역상태관리를 사용함으로서, 부모가 몰라도 되는 상태는 알지 못하게
        단순 프롭스 드릴링을 해소하는 것 뿐만아니라 과연 이 상태가 부모가 알아야하는 상태인가?
      */}
    </>
  );
};
export default User;
