import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { frontendRoutes } from "./frontend.routes";
import NotFound from "../pages/errorPage/NotFound";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";
import { routeGenerator } from "../utils/RoutesGenerator";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: frontendRoutes,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute roleRequired="admin">
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />, // Redirect root "/" to "/user" or "/dashboard"
      },
      ...routeGenerator(adminRoutes),
    ],
  },
  {
    path: "/user",
    element: (
      <PrivateRoute roleRequired="user">
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />, // Redirect root "/" to "/user" or "/dashboard"
      },
      ...routeGenerator(userRoutes),
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
