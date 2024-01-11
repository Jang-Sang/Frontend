import AuthApi from "apis/auth.api";
import { axiosInstance } from "apis/core";
import { useAuth } from "contexts/auth.ctx"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {accessToken, logout} = useAuth();
    const navigate = useNavigate();

    const onPressRefrshBtn = async () => {
        const res = await axiosInstance.post('/user/jwt')
        console.log(res)
    }

    const onPressLogOutBtn = async() => {
        await logout();
    }

    return (
        <div>
            HEADER
            <button onClick={onPressRefrshBtn}>리프레시</button>
            <button onClick={onPressLogOutBtn}>{accessToken ? '로그아웃' : '로그인'}</button>
        </div>
    )
}
export default Header