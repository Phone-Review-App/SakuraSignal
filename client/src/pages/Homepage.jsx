import React from "react";
import { Outlet } from "react-router-dom";
import Router from "./Router";
import {DropdownMenu,MyComponent} from '../components/DropdownMenu'


const Homepage = () => {
  return (
    <>
      <h1>This is home page</h1>
      <DropdownMenu />
      <MyComponent />
    </>
    
  );
};

export default Homepage;