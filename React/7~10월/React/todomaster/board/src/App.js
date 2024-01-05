import "./App.css";
import { MockPosts } from "./__mock__/mockPost";

function App() {
  const posts = MockPosts(10);
  console.log(posts);

  return (
    <div className="App">
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
