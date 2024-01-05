const OneComment = ({ comment }) => {
  // comment 수정 시 중첩 객체 배열의 state의 불변성을 지키기 위해서 어떻게 해야할까
  // ...은 깊은 복사가 아니다
  return (
    <div>
      {comment.content}
      <button>수정</button>
    </div>
  );
};
export default OneComment;
