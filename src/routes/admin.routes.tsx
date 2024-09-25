import AddCar from "../pages/admin/AddCar";
import Home from "../pages/admin/Home";

export const adminRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "cars/add",
    element: <AddCar />,
  },
];
