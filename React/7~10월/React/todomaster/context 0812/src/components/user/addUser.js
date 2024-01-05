import { useUser } from "../../context/user";

const AddUser = () => {
  const [, setUsers] = useUser();
  // 사용하지 않는 요소는 ,만 적어도 생략 가능

  const onAddUser = (e) => {
    e.preventDefault();
    const { name } = e.target;
    console.log(name);
    // 연산이 들어갈 때
    // setUsers((prev) => {
    //   console.log(prev);
    //   return [
    //     ...prev,
    //   ];
    // });

    // 단순히 상태 변경만 원한다
    // return 생략
    // 콜백함수의 실행문을 소괄호로 감싸줌
    setUsers((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100000),
        name: name.value, // name: name --> name, name: "name"(x)
      },
    ]);
  };

  return (
    <form onSubmit={onAddUser}>
      <input name="name" />
      <button>추가</button>
    </form>
  );
};
export default AddUser;
