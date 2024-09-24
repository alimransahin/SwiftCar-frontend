import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/SignIn";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { frontendRoutes } from "./frontend.routes";
import NotFound from "../pages/errorPage/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: frontendRoutes,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
