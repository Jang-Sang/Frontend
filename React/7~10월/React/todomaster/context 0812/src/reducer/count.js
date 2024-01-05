// store
// dispatch action데이터를 가지고와서 store에 전달
// 1. count(state), 2. action(data)
export const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload; // setState와 같이 상태 업데이트 -> 리랜더
    // action -> 전달 -> reducer 연산 실행 -> 상태변경 -> 리랜더
    // 장점 복잡한 연산을 재사용할 수 있다
    // 그러나 커스텀 훅의 대중화로 대부분의 것들은 커스텀 훅만으로 해소가 가능함
    // 컨텍스트와 함께 사용되며 이러한 패턴은 리덕스에서도 똑같이 사용
    default:
      return state;
  }
};
