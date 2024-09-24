import CarDetail from "../components/CarDetail";
import AboutUs from "../pages/AboutUs";
import Car from "../pages/Car";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Signup from "../pages/SignUp";

export const frontendRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "car",
    element: <Car />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "/cars/:id",
    element: <CarDetail />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signUp",
    element: <Signup />,
  },
];
