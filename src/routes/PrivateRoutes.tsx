import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import LoadingSpinner from "../utils/LoadingSpinner";

interface PrivateRouteProps {
  children: React.ReactNode;
  roleRequired?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roleRequired,
}) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authContext) {
      setIsLoading(false);
    }
  }, [authContext]);

  if (!authContext) {
    throw new Error("PrivateRoute must be used within an AuthProvider");
  }

  const { user } = authContext;
  const token = localStorage.getItem("accessToken");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!token) {
    return <Navigate to="/signin" />;
  }

  if (roleRequired && user?.role !== roleRequired) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
