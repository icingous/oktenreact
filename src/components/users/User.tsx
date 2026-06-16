import { type FC } from "react";
import type { IUser } from "../../models/IUser";

interface IUserProps {
  user: IUser;
}

const User: FC<IUserProps> = ({ user: { id, name } }) => {
  return <div>{`${id} ${name}`}</div>;
};

export default User;
