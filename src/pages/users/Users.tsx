import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api.service';
import type { IUser } from '../../models/IUser';
import type { IResponseBase } from '../../models/IResponseBase';
import Users from '../../components/users/Users';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = Number(searchParams.get('page')!);

    api
      .getPage<IResponseBase & { users: IUser[] }>('/users', page)
      .then((res) => setUsers(res.users));
  }, [searchParams]);

  return <Users users={users} />;
};

export default UsersPage;
