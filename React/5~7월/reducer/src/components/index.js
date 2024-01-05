import AddUser from "./addUser"
import UserList from "./userList"
import {useState} from 'react'

function User(){
    /* 
    (10분)
        추가 버튼을 누르면 유저가 추가 되어야하고
        삭제 버튼을 누르면 유저가 삭제 되는 상태 업데이트 함수를 구현
    */

    /* 
    추가함수 setUserList ([...userList, newUser])
    한글이라도 적어놔요
    */
    /*
    삭제함수 setUserList(filterUser)
    const filterUser = userList.filter((user) => user.id !== id)
   */

    return (
        <>
            <UserList />
            <AddUser />
        </>
    )
}
export default User