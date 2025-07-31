import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Client from "./views/Client";
import IndexPage from "./views/admin/IndexPage";
import ClientLayout from "./layouts/ClientLayout";
import PostsCard from "./views/admin/PostsCard";
import Dashboard from "./views/admin/Dashboard";
import Recents from "./views/admin/Recents";
import Posts from "./views/admin/Posts";

let router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Client />,
      },
      {
        path: "/admin",
        element: <IndexPage />,
        children: [
          {
            path: "posts",
            element: <Posts />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "recent",
            element: <Recents />,
          },
        ],
      },
    ],
  },
]);

export default router;
