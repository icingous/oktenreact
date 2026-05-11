import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import UserCartsPage from '../pages/carts/UserCartsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
      },
      { path: ':userId/carts', element: <UserCartsPage /> },
    ],
  },
]);

export default router;
