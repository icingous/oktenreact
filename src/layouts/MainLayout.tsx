import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import Paginator from '../components/paginator/Paginator';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Paginator />
    </>
  );
};

export default MainLayout;
