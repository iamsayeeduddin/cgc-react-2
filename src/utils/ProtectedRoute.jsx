import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, userData }) => {
  return userData?.token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
