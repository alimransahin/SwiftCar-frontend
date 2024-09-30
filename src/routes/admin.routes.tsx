import AddCar from "../pages/admin/AddCar";
import AdminHome from "../pages/admin/AdminHome";
import BookingManage from "../pages/admin/BookingManage";
import DeleteCar from "../pages/admin/DeleteCar";
import ManageUser from "../pages/admin/ManageUser";
import UpdateCar from "../pages/admin/UpdateCar";
import UpdateProfile from "../pages/UpdateProfile";
import GetAllCar from "../pages/user/GetAllCar";

export const adminRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminHome />,
  },
  {
    name: "Update Profile",
    path: "update-profile",
    element: <UpdateProfile />,
  },
  {
    name: "Car Management",
    children: [
      {
        name: "All Car",
        path: "cars",
        element: <GetAllCar />,
      },
      {
        name: "Add Car",
        path: "add-car",
        element: <AddCar />,
      },
      {
        // name: "Update Car",
        path: "update-car/:id",
        element: <UpdateCar />,
      },
      {
        path: "delete-car",
        element: <DeleteCar />,
      },
    ],
  },
  {
    name: "Booking",
    path: "booking",
    element: <BookingManage />,
  },
  {
    name: "User",
    path: "user",
    element: <ManageUser />,
  },
];
