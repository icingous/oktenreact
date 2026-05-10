import { useEffect, useState, type FC } from 'react';
import type IUser from '../../models/IUser';
import User from './User';
import type IUserService from '../../models/IUserService';

interface UsersProps {
  service: IUserService;
}

const Users: FC<UsersProps> = ({ service }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    service.getUsers().then((users) => {
      setUsers(users);
    });
  }, [service]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
