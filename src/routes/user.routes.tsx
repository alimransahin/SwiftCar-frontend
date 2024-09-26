import Car from "../pages/Car";
import UpdateProfile from "../pages/UpdateProfile";
import BookCar from "../pages/user/BookCAr";
import CarDetail from "../pages/user/CarDetail";
import GetAllCar from "../pages/user/GetAllCar";
import MyBookings from "../pages/user/MyBookings";

import UserHome from "../pages/user/UserHome";

export const userRoutes = [
  {
    name: "Profile Managemente",
    path: "dashboard",
    element: <UserHome />,
  },
  {
    name: "Update Profile",
    path: "update-profile",
    element: <UpdateProfile />,
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Cars",
        path: "all-car",
        element: <GetAllCar />,
      },
      {
        // name: "View Bikes",
        path: "cars:/",
        element: <CarDetail />,
      },
      {
        // name: "View Bikes",
        path: "book-car:/id",
        element: <BookCar />,
      },
    ],
  },

  {
    name: "My Bookings",
    path: "all-bookings",
    element: <MyBookings />,
  },
];
