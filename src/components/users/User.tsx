import { type FC } from 'react';
import type { IUser } from '../../models/IUser';

interface IUserProps {
  user: IUser;
}

const User: FC<IUserProps> = ({ user }) => {
  return <div>{`${user.username} (${user.email})`}</div>;
};

export default User;
