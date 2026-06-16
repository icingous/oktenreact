import Loading from "../../components/loading/Loading";
import Users from "../../components/users/Users";
import useUsers from "./useUsers";

const UsersPage = () => {
  const { users, loading } = useUsers();

  return (
    <>
      <Loading loading={loading} />
      <Users users={users} />
    </>
  );
};

export default UsersPage;
