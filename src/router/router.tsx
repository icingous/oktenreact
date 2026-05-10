import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import UserCartsPage from '../pages/carts/UserCartsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: ':userId/carts', element: <UserCartsPage /> }],
  },
]);

export default router;
