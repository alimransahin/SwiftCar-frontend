import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { frontendRoutes } from "./frontend.routes";
import NotFound from "../pages/errorPage/NotFound";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: frontendRoutes,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: adminRoutes,
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: userRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
