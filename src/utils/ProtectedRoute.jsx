import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData?.token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
