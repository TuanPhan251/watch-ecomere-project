import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
const LoginLayout = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) return <Navigate to={ROUTES.USER.HOME} />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
