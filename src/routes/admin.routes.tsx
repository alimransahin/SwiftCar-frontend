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
  {
    name: "Profile Management",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Update Profile",
    path: "update-profile",
    element: <UpdateProfile />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "Bike Listing",
        path: "bike-listing",
        element: <BikeListing />,
      },
      // {
      //   name: "Bike Detail",
      //   path: "bike-detail",
      //   element: "Bike Detail",
      // },
      {
        // name: "Update Bike", //need to update this
        path: "view-bike/:bikeId",
        element: <ViewBike />,
      },
    ],
  },
  {
    name: "Rental Management",
    children: [
      {
        name: "Booking",
        path: "bike-booking",
        element: <BookingPage />,
      },
      {
        name: "My Rentals",
        path: "my-rentals",
        element: <MyRentList />,
      },
    ],
  },
];
