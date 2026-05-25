import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';

const MainLayout = () => {
  return (
    <div>
      <Menu />
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
