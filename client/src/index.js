import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import Layout from './pages/Layout';
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
// import AU from "./pages/AU";
// import Docomo from "./pages/Docomo";
// import GTN from "./pages/GTN";
// import Linemo from "./pages/Linemo";
// import Mobal from "./pages/Mobal";
// import Rakuten from "./pages/Rakuten";
// import Softbank from "./pages/Softbank";
// import UQ from "./pages/UQ";
// import Ymobile from "./pages/Ymobile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/Form",
    element: <Form />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={ router } />
);


