import React from "react";
import { Outlet } from "react-router-dom";
import Router from "./Router";

const Homepage = () => {
  return (
    <>
      <Router />
      <Outlet />
    </>
  );
};

export default Homepage;