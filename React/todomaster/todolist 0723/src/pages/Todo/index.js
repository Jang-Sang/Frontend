import SJButton from "components/Button";

const Todopage = () => {
  const isOpenAddTodoModal = true;
  // bool를 나타내는 변수 앞에는 is
  




  return (
    <>
      {isOpenAddTodoModal && (
        <div>
          <div>
            <h1>ADD TODO LIST</h1>
            <button>x</button>
          </div>
          <form>
            <input placeholder="제목을 입력해주세요" />
            <textarea placeholder="할 일을 입력해주세요" />
            <SJButton variant={"primary"} size={"small"} shape={"round"}>
              ADD
            </SJButton>
          </form>
        </div>
      )}
      <div>
        <h1>List</h1>
        <div>
          <div>
            <header>
              <div></div>
              <div></div>
              <div>
                <div></div>
                <div></div>
              </div>
            </header>
            <div></div>
          </div>
        </div>
        <div>
          <SJButton>추가</SJButton>
        </div>
      </div>
    </>
  );
};
export default Todopage;
