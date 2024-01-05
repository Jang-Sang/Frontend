// 이것을 사용하면 어떤 토큰키이든 로직상 변화를 줄 필요성이 적어진다.

const TOKEN_KEY = 'access_token'

const TokenRepository = {
    setToken(token){
        localStorage.setItem(TOKEN_KEY, token)
    },

    getToken(){
        return localStorage.getItem(TOKEN_KEY)
    },

    removeToken(){
        localStorage.removeItem(TOKEN_KEY)
    }
}
export default TokenRepository