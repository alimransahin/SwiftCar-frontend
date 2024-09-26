import CarCard from "../components/CarCard";
import CarDetail from "../components/CarDetail";
import Dashboard from "../components/layouts/DashboardLayout";
import Car from "../pages/Car";
import Home from "../pages/user/Home";
import MyBookings from "../pages/user/MyBookings";

export const userRoutes = [
  {
    name: "Profile Managemente",
    path: "dashboard",
    element: <Home />,
  },
  {
    name: "Update Profile",
    path: "update-profile",
    element: <Car />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "Create Bikes",
        path: "create-bikes",
        element: <Car />,
      },
      {
        name: "View Bikes",
        path: "view-bikes",
        element: <Car />,
      },
      {
        // name: "Update Bike", //need to update this
        path: "update-bike/:bikeId",
        element: <Car />,
      },
      {
        // name: "Update Bike", //need to update this
        path: "view-bike/:bikeId",
        element: <Car />,
      },
    ],
  },

  {
    name: "Users Management",
    children: [
      {
        name: "All Users",
        path: "all-users",
        element: <Car />,
      },
    ],
  },

  {
    name: "Bike Rent",
    children: [
      {
        name: "Returned",
        path: "returned-bike",
        element: <Car />,
      },
    ],
  },
];
