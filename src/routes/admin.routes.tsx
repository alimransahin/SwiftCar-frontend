import AddCar from "../pages/admin/AddCar";
import Home from "../pages/admin/Home";

export const adminRoutes = [
  {
    name: "add",
    path: "cars/add",
    element: <AddCar />,
  },
  {
    name: "Profile Management",
    path: "dashboard",
    element: <Home />,
  },
  {
    name: "Update Profile",
    path: "update-profile",
    element: <Home />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "Bike Listing",
        path: "bike-listing",
        element: <Home />,
      },
      // {
      //   name: "Bike Detail",
      //   path: "bike-detail",
      //   element: "Bike Detail",
      // },
      {
        // name: "Update Bike", //need to update this
        path: "view-bike/:bikeId",
        element: <Home />,
      },
    ],
  },
  {
    name: "Rental Management",
    children: [
      {
        name: "Booking",
        path: "bike-booking",
        element: <Home />,
      },
      {
        name: "My Rentals",
        path: "my-rentals",
        element: <Home />,
      },
    ],
  },
];
