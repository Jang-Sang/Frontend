import AuthApi from "apis/auth.api";
import TokenRepository from "repositories/TokenRepository";

const { createContext, useState, useEffect, useContext } = require("react");

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(null);
    /* 
        accessToken을 왜 state로 관리 하는가
        웹 스토리지는 state가 아니므로, 로그인 로그아웃이 새로 고침이나 페이지 이동 없이
        UI 변동을 일으키기 위함
    */

        // setAccessToken이 null이 아니라면 로그인 중
    useEffect(()=>{
        const token = TokenRepository.getToken();
        if(token){
            setAccessToken(token)
        }
    }, [])
    const login = (token) => {
        TokenRepository.setToken(token);
        setAccessToken(token)
    }
    const logout = async () => {
        const res = await AuthApi.logout();
        if(res.status === 201){
            TokenRepository.removeToken();
            setAccessToken(null)
        }
    }

    return(
        <AuthContext.Provider value={{accessToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider