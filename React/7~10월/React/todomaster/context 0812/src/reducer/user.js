export const ADD_USER = "ADD_USER";
/**
 * dispatch가 전달하는 값과 reducer의 case문에서 일치해야하는 조건의 값은 항상 같아야함
 *
 * 따라서 이런 경우는 상수로 만들어서 참조해서 사용하는 것을 추천
 */

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        { id: Math.floor(Math.random() * 100000), name: action.payload.name },
      ];
    default:
      return;
  }
};
export default userReducer;

// 상수로 만들어 관리하는 것이 오타나 오류가 나올 확률이 더 적다.
// context/user.js 안에 있는 값과 여기서 검사하는 값이 같아야지 dispatch를 사용가능하다.
// 다를시 전달은 되지만 case문이 검사를 하지 못하고 default로 빠진다.
