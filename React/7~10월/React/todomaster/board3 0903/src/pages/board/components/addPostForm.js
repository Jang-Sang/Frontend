const AddPostForm = ({ setPosts }) => {
  const onClickAddForm = (e) => {
    e.preventDefault();
    //....
    const title = e.target.title.value;
    const content = e.target.content.value;
    setPosts((prev) => [
      {
        Comments: [],
        Post_img: [],
        User: {
          id: Math.floor(Math.random() * 1000000),
          nickName: "Peter",
          profileImg: null,
        },
        content,
        title,
        id: Math.floor(Math.random() * 1000000),
        myPost: true,
      },
      ...prev,
    ]);
  };

  return (
    <form onSubmit={onClickAddForm}>
      <p>
        <input name="title" />
      </p>
      <textarea name="content"></textarea>
      <button>등록</button>
    </form>
  );
};

export default AddPostForm;
