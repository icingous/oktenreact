import { useEffect, useState } from 'react';
import api from '../../services/api.service';
import type { IUser } from '../../models/IUser';
import type { IResponseBase } from '../../models/IResponseBase';
import Users from '../../components/users/Users';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api
      .getAll<IResponseBase & { users: IUser[] }>('/users')
      .then((res) => setUsers(res.users));
  }, []);

  return <Users users={users} />;
};

export default UsersPage;
