import { createContext, useState } from "react"



const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"))

  return (
    <AuthContext.Provider value={{accessToken, setAccessToken}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider