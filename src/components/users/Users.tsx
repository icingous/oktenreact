import { useEffect, useState, type FC } from 'react';
import type IUser from '../../models/IUser';
import type { IUrlProps } from '../../models/IUrlProps';
import { userService } from '../../services/api.service';
import User from './User';

const Users: FC<IUrlProps> = ({ url }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userService.getUsers(url).then((users) => {
      setUsers(users);
    });
  }, [url]);

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
