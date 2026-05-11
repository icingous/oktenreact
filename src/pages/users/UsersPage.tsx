import { Outlet } from 'react-router-dom';
import Users from '../../components/user/Users';

const UsersPage = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-x-20'>
      <Users />
      <Outlet />
    </div>
  );
};

export default UsersPage;
