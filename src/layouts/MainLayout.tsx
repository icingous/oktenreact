import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='p-8'>
      <Outlet />
    </div>
  );
};

export default MainLayout;
