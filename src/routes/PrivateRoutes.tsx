import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { toast } from "react-toastify";

interface PrivateRouteProps {
  children: React.ReactNode;
  roleRequired?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roleRequired,
}) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    if (authContext) {
      setIsLoading(false); // Mark as loaded when context is available
    }
  }, [authContext]);

  if (!authContext) {
    throw new Error("PrivateRoute must be used within an AuthProvider");
  }

  const { user } = authContext;
  const token = localStorage.getItem("accessToken");

  // If still loading, don't render the content yet
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  // If no token, redirect to signin page
  if (!token) {
    return <Navigate to="/signin" />;
  }

  // If a specific role is required and user doesn't match, show a warning and redirect
  if (roleRequired && user?.role !== roleRequired) {
    toast.warning("You have no permission to access this page");
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
