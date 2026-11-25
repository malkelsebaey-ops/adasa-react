import React from "react";
import { MyNavbar } from "../../components/MyNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MyNavbar />
      <Outlet />
      
    </>
  );
}
