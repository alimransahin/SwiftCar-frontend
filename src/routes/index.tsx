import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Success from "../pages/checkout/Success";
import Checkout from "../pages/checkout/checkout";
import Car from "../pages/Car";
import CarDetail from "../components/CarDetail";
import NotFound from "../pages/errorPage/NotFound";
import Signup from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/car",
        element: <Car />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // {
      //   path: "/products",
      //   element: <Product />,
      // },
      {
        path: "/cars/:id",
        element: <CarDetail />,
      },
      // {
      //   path: "/manage",
      //   element: <ProductManagement />,
      // },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Success />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "*", // Catch-all route
        element: <NotFound />, // Your 404 component
      },
    ],
  },
]);
