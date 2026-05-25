import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/HomePage';
import CarsPage from '../pages/CarsPage';
import CarFormPage from '../pages/CarFormPage';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'cars',
        element: <CarsPage />,
      },
      { path: 'cars/create', element: <CarFormPage /> },
      { path: '*', element: <Home /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
