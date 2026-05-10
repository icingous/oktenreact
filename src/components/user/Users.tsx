import { useEffect, useState } from 'react';
import type { IUser } from '../../models/IUser';
import { userService } from '../../services/api.service';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userService.getUsers().then((res) => setUsers(res.users));
  }, []);

  return (
    <div className='flex flex-col gap-y-2 border rounded p-4'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
