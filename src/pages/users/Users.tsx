import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api.service';
import type { IUser } from '../../models/IUser';
import type { IResponseBase } from '../../models/IResponseBase';
import Users from '../../components/users/Users';
import Paginator from '../../components/paginator/Paginator';
import { defaults } from '../../constants/defaults';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchParams] = useSearchParams();
  const [paginationData, setPaginationData] = useState<IResponseBase>(
    defaults.responseBase,
  );
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    api
      .getPage<
        IResponseBase & { users: IUser[] }
      >('/users', page, paginationData.size)
      .then((res) => {
        const { users, ...data } = res;

        setPaginationData((state) => ({ ...state, ...data }));
        setUsers(users);
      });
  }, [paginationData.size, page]);

  return (
    <>
      <Users users={users} />
      <Paginator data={paginationData} />
    </>
  );
};

export default UsersPage;
