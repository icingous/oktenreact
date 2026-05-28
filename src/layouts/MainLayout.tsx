import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <div className='p-4'>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
