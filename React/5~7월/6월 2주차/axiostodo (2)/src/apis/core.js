import axios from "axios";
import TokenRepository from "repositories/TokenRepository";
import AuthApi from "./auth.api";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${TokenRepository.getToken()}`
    },
    withCredentials: true
})


// 프론트엔드가 백엔드에 요청을 보내기 전에 가로채는 것, 주로 access_token
axiosInstance.interceptors.request.use(
    (config) => {
        const access_token = TokenRepository.getToken()
        // 토큰 불러온 것
        if(access_token){
            config.headers.Authorization = `Bearer ${access_token}`
            // 헤더에 토큰을 실은 것
        }
        return config
        // 다시 요청 그대로 전송
    }
)

// 프론트엔드가 응답을 받기 전에 응답을 가로채는 것, 주로 refresh
axiosInstance.interceptors.response.use(
    (res) => {
        return res
        // 성공했을 때 가로챘을 때 로직이 있다면 구현
    },
    async (err) => {
        if(err.response.status === 401){
           await AuthApi.logout()
           //로그아웃 요청 보내는 이유
           //1. 레디스로 관리 가능 / 레디스-키 벨류로 이루어진 db
           //2. 로그아웃 체크 관리
           //3. 세션을 제거할 수 있다.(세션이 누적되면 부담을 줄 수 있기 때문에)
           //4. refreshTokken에대한 종료,만료 가능
           TokenRepository.removeToken()
        }

        const originalRequest = err.config;
        if(err.response.status === 403 && !originalRequest._retry){
            originalRequest._retry = true;

            const res = await axiosInstance.post('/user/jwt');
            // 토큰 재발급 요청
            if(res.status === 200){
                //성공
                const token = res.data.data
                // 응답 데이터 -> 토큰

                TokenRepository.setToken(token)
                // 토큰 웹 스토리지 재설정

                axiosInstance.defaults.headers.common['Authorization'] = `Baerer ${token}`
                // 헤더에 토큰 재설정

                return axiosInstance(originalRequest)
                // 기존 요청 재전송
            }
        }
    }
)