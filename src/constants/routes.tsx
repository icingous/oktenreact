import { createBrowserRouter } from 'react-router-dom';
import {
  JPUsers,
  DJUsers,
  JPPosts,
  DJPosts,
  JPComments,
  DJComments,
} from '../pages';
import MainLayout from '../layouts/MainLayout';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <></> },
      { path: 'users/jsonplaceholder', element: <JPUsers /> },
      { path: 'users/dummyjson', element: <DJUsers /> },
      { path: 'posts/jsonplaceholder', element: <JPPosts /> },
      { path: 'posts/dummyjson', element: <DJPosts /> },
      { path: 'comments/jsonplaceholder', element: <JPComments /> },
      { path: 'comments/dummyjson', element: <DJComments /> },
      { path: '*', element: <></> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
