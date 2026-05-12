import { createRoot } from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
  // BrowserRouter,
  // Route,
  // Routes,
} from 'react-router-dom';
import router from './router/routes';
// import { Users, Posts, Comments, Products } from './pages';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<MainLayout />}>
//         <Route path='users' element={<Users />} />
//         <Route path='posts' element={<Posts />} />
//         <Route path='comments' element={<Comments />} />
//         <Route path='products' element={<Products />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
// );
