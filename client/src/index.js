import './index.css';
import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import AU from "./pages/AU";
import Docomo from "./pages/Docomo";
import GTN from "./pages/GTN";
import Linemo from "./pages/Linemo";
import Mobal from "./pages/Mobal";
import Rakuten from "./pages/Rakuten";
import Softbank from "./pages/Softbank";
import UQ from "./pages/UQ";
import Ymobile from "./pages/Ymobile";
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={ router } />
);


