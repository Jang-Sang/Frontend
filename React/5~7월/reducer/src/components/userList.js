import React from "react"
import { useUserStore } from "../context/user"

function UserList(){
    const [userList, setUserList] = useUserStore();

    const hanldeDeleteuser = (id) => {
        const filterUser = userList.filter((user) => user.id !== id)
        setUserList(filterUser)
      }

    return userList.map((user,index) => (
        <div key={user.id}>
            {index + 1}. {user.name}
            <button onClick={()=>hanldeDeleteuser(user.id)}>삭제</button>
        </div>
    ))
}
export default UserList