import React from "react";
import Menu from "./Menu";
import { Outlet, Navigate } from "react-router-dom";

export default function Main_admin() {
  const session = localStorage.getItem("token");
  const login = { token: session };
  return login.token ? (
    <>
      <Menu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
