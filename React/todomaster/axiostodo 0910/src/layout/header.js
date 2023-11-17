import { useAuth } from "prvoider/authProvider"
import { useNavigate } from "react-router"

const Header = () => {
  const navigate = useNavigate()
  const { accessToken, signOut } = useAuth()

  const onClickNavaigateLogin = async () => {
    await signOut()
    navigate("/")
  }

  return <>
    <button onClick={onClickNavaigateLogin}>
      {accessToken ? "로그아웃" : "로그인"}
    </button>
  </>
}
export default Header