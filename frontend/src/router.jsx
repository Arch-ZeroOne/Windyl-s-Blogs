import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Client from "./views/Client";
import Dashboard from "./views/admin/Dashboard";
import Posts from "./views/admin/Posts";

import ClientLayout from "./layouts/ClientLayout";

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
        element: <Dashboard />,
        children: [
          {
            path: "posts",
            element: <Posts />,
          },
        ],
      },
    ],
  },
]);

export default router;
