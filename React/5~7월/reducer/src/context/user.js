import { createContext, useContext, useState } from "react"

const initailState = [
    {
        id: 1,
        name: "김성용"
    },
    {
        id: 2,
        name: "오현우님"
    },
    {
        id: 3,
        name: "장동민님"
    },
    {
        id:4,
        name: "노승현님"
    },
]


export const useUserStore = () => useContext(UserStore)
// 모든 컴포넌트에서 useContext 훅을 import하지 않도록
// 통합된 훅함수 생성

const UserStore = createContext();
// 전역 상태가 저장 될 store를 생성, 그 store의 이름은 userStore

const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'REMOVE_USER':  
            return state.filter((user) => user.id !== action.payload);
        default:
            return state;      
    }
}



const UserStoreProvider = ({children}) => {
    const [userList, setUserList] = useState(initailState);

    return (
        <UserStore.Provider value={[userList, setUserList]}>
            {children}
        </UserStore.Provider>
    )
}
export default UserStoreProvider