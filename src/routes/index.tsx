import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Product from "../pages/Product";
import ProductDetail from "../components/product/ProductDetail";
import ProductManagement from "../pages/ProductManagement";
import Success from "../pages/checkout/Success";
import Checkout from "../pages/checkout/checkout";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/manage",
        element: <ProductManagement />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Success />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
