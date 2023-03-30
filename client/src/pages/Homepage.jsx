import React from "react";
import { Outlet } from "react-router-dom";
import Router from "./Router";
import DropdownMenu from '../components/DropdownMenu';
import MyComponent from '../components/MyComponent';

const Homepage = () => {
  return (
    <>
      <h1>This is home page</h1>
      <DropdownMenu value="AU"/>
      <h2>Hello World</h2>
      <MyComponent />
    </>
    
  );
};

export default Homepage;