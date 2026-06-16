import { type FC } from "react";
import type { IUser } from "../../models/IUser";
import User from "./User";

interface IUsersProps {
  users: IUser[] | null;
}

const Users: FC<IUsersProps> = ({ users }) => {
  return (
    <div>
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
