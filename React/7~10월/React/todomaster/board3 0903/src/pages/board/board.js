import { useState } from "react";
import { MockPosts } from "../../__mock__/mockPost";
import OnePost from "./components/onePost";
import AddPostForm from "./components/addPostForm";

const BoardPage = () => {
  const [posts, setPosts] = useState(MockPosts(10));

  return (
    <div>
      <AddPostForm setPosts={setPosts} />
      {posts.map((post, index) => (
        <OnePost key={"posts" + index} post={post} />
      ))}
    </div>
  );
};
export default BoardPage;
