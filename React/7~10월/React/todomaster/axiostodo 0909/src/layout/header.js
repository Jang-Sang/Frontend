import { useNavigate } from "react-router"

const Header = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem("access_token")

  const onClickNavaigateLogin = () => {
    navigate("/")
  }

  return <>
    <button onClick={onClickNavaigateLogin}>
      {accessToken ? "로그아웃" : "로그인"}
    </button>
  </>
}
export default Header