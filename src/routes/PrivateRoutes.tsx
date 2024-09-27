import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { toast } from "react-toastify";

interface PrivateRouteProps {
  children: React.ReactNode;
  roleRequired?: string; // Optional role required
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roleRequired,
}) => {
  const authContext = useContext(AuthContext); // Access the AuthContext

  if (!authContext) {
    throw new Error("PrivateRoute must be used within an AuthProvider");
  }

  const { user } = authContext; // Get user from context
  const token = localStorage.getItem("accessToken"); // Get token from local storage

  if (!token) {
    return <Navigate to="/signin" />;
  }

  if (roleRequired && user?.role !== roleRequired) {
    // Redirect to not authorized if role doesn't match
    {
      // alert("You have no permition to access this page");
      toast.warning("You have no permition to access this page");
    }
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
