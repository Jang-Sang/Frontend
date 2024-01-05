import { useState } from "react";
import OneComment from "./oneComment";

const OnePost = ({ post }) => {
  const [isVisibleComments, setIsVisibleComments] = useState(false);

  const onClickVisibleComment = () => {
    setIsVisibleComments((prev) => !prev);
  };

  return (
    <div
      style={{
        margin: 10,
        border: "1px solid #000",
      }}
    >
      <div>{post.User.nickName}</div>
      <div
        style={{
          flexDirection: "row",
        }}
      >
        {post.Post_img.map((img) => (
          <img src={img} alt="img" />
        ))}
      </div>
      {post.title}
      {post.content}
      <button onClick={onClickVisibleComment}>댓글보기</button>
      {isVisibleComments && (
        <div>
          <input name="content" />
          <button>등록</button>
          {post.Comments.map((comment) => (
            <OneComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
export default OnePost;
