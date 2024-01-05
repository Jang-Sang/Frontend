import AuthApi from "apis/auth";
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import TokenRepository from "repository/TokenRepository";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(TokenRepository.getToken())
  
  useEffect(()=>{
    const token = TokenRepository.getToken();
    if(token){
      setAccessToken(token)
    }
  }, [])


  return (
    <AuthContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider

export const useAuth = () => {
  const [accessToken, setAccessToken] = useContext(AuthContext);
  const navigate = useNavigate()

  const signIn = async ({email,password}) => {
      const response = await AuthApi.signIn(email, password)
      setAccessToken(response.data.token)
      TokenRepository.setToken(response.data.token)
      navigate('/todo')
  }

  const signUp = async({email, password}) => {
      await AuthApi.signUp(email, password)
  }

  const signOut = async() => {
    await AuthApi.signOut()
    setAccessToken(null)
    TokenRepository.deleteToken()
    navigate("/")
  }

  return {
    accessToken,
    // isLogind: !!accessToken,
    signIn,
    signOut,
    signUp
  }
}

/* 
  1. auth 관련 로직은 페이지 어디에서나 쓰일 수 있다
  2. 전역 상태 관리를 통해 프론트 엔드도 로그인 유무를 알 수 있고, 화면을 랜더해야한다
  3. custom hook
*/