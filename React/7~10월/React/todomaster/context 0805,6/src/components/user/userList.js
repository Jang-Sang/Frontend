import { useUser } from "../../context/user";

const UserList = () => {
  const [users] = useUser();

  return (
    <>
      {users.map((user) => (
        <div>
          {user.id}. {user.name}
        </div>
      ))}
    </>
  );
};
export default UserList;
