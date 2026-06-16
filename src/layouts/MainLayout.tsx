import { Outlet } from "react-router";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
  return (
    <div className="px-4">
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
