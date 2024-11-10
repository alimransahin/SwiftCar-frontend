import NotFound from "../pages/errorPage/NotFound";
import MyProfile from "../pages/etc/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import BookCar from "../pages/user/BookCar";
import GetAllCar from "../pages/user/GetAllCar";
import MyBookings from "../pages/user/MyBookings";
import Payment from "../pages/user/Payment";

import UserHome from "../pages/user/UserHome";

export const userRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserHome />,
  },
  {
    name: "My Profile",
    path: "profile",
    element: <MyProfile />,
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
        // name: "View Car",
        path: "all-car/book-car/:id",
        element: <BookCar />,
      },

      {
        name: "My Bookings",
        path: "all-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    name: "Payment",
    path: "payment",
    element: <Payment />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
