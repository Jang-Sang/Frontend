const { axiosInstance } = require("./core")
const PATH = '/user'

const AuthApi = {
    login(email, password){
        return axiosInstance.post(PATH + "/login", {email, password})
    },
    
    sigunUp(email, password){
        return axiosInstance.post(PATH + "/sigin", {email, password})
    },

    logout(){
        return axiosInstance.post(PATH + '/logout')
    }
}
export default AuthApi