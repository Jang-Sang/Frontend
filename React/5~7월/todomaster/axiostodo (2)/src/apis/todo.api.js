const { axiosInstance } = require("./core")
const PATH = '/todo'

const TodoApi = {
    getTodo(){
        return axiosInstance.get(PATH)
    },

    addTodo(content, title){
        return axiosInstance.post(PATH, {content, title})
    },

    updatTodo(id, { content, state }){
        return axiosInstance.put(PATH + `/${id}`, {content, state})
    },

    deleteTodo(id){
        return axiosInstance.delete(PATH + `/${id}`)
    }
}
export default TodoApi

// 에러 핸들링의 전역 변수화
// 기존 에러 핸들링
// const updatetTodo = async (updatePost) => {
//     try {
//         await axiosTodo.put('/${updatePost.id}', {
//             state: updatePost.state, title: updatePost.title, content: updatePost.content
//         });

//         const res = await axiosTodo.get();
//         return res.data.data
//     } catch (err) {
//         console.error(err)
//     }
// }