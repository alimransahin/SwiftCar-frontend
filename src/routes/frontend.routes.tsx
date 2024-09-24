import CarDetail from "../components/CarDetail";
import AboutUs from "../pages/AboutUs";
import Car from "../pages/Car";
import ContactUs from "../pages/ContactUs";
import BlogPage from "../pages/etc/Blog";
import FAQ from "../pages/etc/FAQ";
import ForgotPassword from "../pages/etc/ForgotPassword";
import PrivacyPolicy from "../pages/etc/PrivacyPolicy";
import RefundAndReturnPolicy from "../pages/etc/Refund";
import Sitemap from "../pages/etc/Sitemap";
import TermsOfUse from "../pages/etc/TermsOfUse";
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
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "terms",
    element: <TermsOfUse />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "refund-policy",
    element: <RefundAndReturnPolicy />,
  },
  {
    path: "sitemap",
    element: <Sitemap />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
];
