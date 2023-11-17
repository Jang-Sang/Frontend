import axios from "axios";
import TokenRepository from "repository/TokenRepository";
import AuthApi from "./auth";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${TokenRepository.getToken()}`
  },
  withCredentials: true
  // 서버끼리의 cookie data 정보를 교환하기 위해 사용 -> refresh
  // 저희 backend에서 refesh token을 cookie로 전달하고 있기 때문에
  // withCredentials를 true로 하는 것
})
// Bearer -> jsonweb token
// 1. instance를 생성할 때 header의 기본 값
// 2. axios.interseptors, 요청을 보내기 직전, 요청을 받기 직전 가로챔

axiosInstance.interceptors.request.use((config)=>{
  const accessToken = TokenRepository.getToken();
  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// refresh -> accessToken 재발급
axiosInstance.interceptors.response.use((response)=>{
  return response
}, 

async (error)=>{
  const originRequest = error.config;

  if(error.response.status === 401 && !originRequest._retry) {
    originRequest._retry = true;

    // 재발급 요청
    const response = await AuthApi.refresh();
    const token = response.data;
    // 웹 스토리지에 셋팅
    TokenRepository.setToken(token);
    // 다시 인증토큰을 헤더에 작성
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // 재요청
    return axiosInstance(error.config)
  }

  // 리프레쉬 토큰도 만료
  if(error.response.status === 403){
    await AuthApi.signOut();
    TokenRepository.deleteToken()
    alert("세션이 만료되었습니다")
    window.location.href = "/"
  }

  return Promise.reject(error)
})