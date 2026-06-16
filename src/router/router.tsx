import { createBrowserRouter, type RouteObject } from "react-router";
import {
  CommentsPage,
  ComplexPage,
  HomePage,
  PostsPage,
  UsersPage,
} from "../pages";
import MainLayout from "../layouts/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UsersPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "comments", element: <CommentsPage /> },
      { path: "complex", element: <ComplexPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
