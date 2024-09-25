import Home from "../pages/user/Home";
import MyBookings from "../pages/user/MyBookings";

export const userRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "my-bookings",
    element: <MyBookings />,
  },
];
