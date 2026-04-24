import { createBrowserRouter } from 'react-router-dom';
import { Users, Posts, Comments, Products } from '../pages';
import MainLayout from '../layouts/MainLayout';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'posts', element: <Posts /> },
      { path: 'comments', element: <Comments /> },
      { path: 'products', element: <Products /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
