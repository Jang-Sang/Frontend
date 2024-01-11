const { axiosInstance } = require("./core")
const PATH = '/user' //관심사 분리

//class
const AuthApi = {
    login(email, password){
        return axiosInstance.get(PATH + "/login", {email, password})
    },
    
    sigunUp(email, password){
        return axiosInstance.post(PATH + "/sigin", {email, password})
    },

    logout(){
        return axiosInstance.post(PATH + '/logout')
    }
}
export default AuthApi

// express -> node.js -> nest.js  이 순서로 공부하는게 좋다.