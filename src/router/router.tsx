import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Home, Posts, Users } from '../pages';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'users', element: <Users /> },
      { path: 'posts', element: <Posts /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
