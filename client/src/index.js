import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />
//   },
//   {
//     path: "/Form",
//     element: <Form />
//   },
//   {
//     path: "/AU",
//     element: <AU />
//   },
//   {
//     path: "/Docomo",
//     element: <Docomo />
//   },
//   {
//     path: "/GTN Mobile",
//     element: <GTN />
//   },
//   {
//     path: "/Linemo",
//     element: <Linemo />
//   },
//   {
//     path: "/Mobal",
//     element: <Mobal />
//   },
//   {
//     path: "/Rakuten Mobile",
//     element: <Rakuten />
//   },
//   {
//     path: "/Softbank",
//     element: <Softbank/>
//   },
//   {
//     path: "/UQ Mobile",
//     element: <UQ />
//   },
//   {
//     path: "/Y!mobile",
//     element: <Ymobile />
//   },
// ]);

const mobiles = {
  provider: ["Mobal", "Docomo", "AU", "Softbank", "Rakuten Mobile", "Linemo", "Y!mobile","UQ Mobile", "GTN Mobile"]
}

const makeProviderComponents = mobiles.provider.map((provider, index) => {
    return <Provider key={provider} providerId={index + 1}/>
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RouterProvider router={router} />
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Form" element={<Form />} />
      {
        mobiles["provider"].map((path, index) => (
        <Route key={path} path={"/"+path} element={makeProviderComponents[index]} />
        ))
      }
    </Routes>
  </Router>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />
//   },
//   {
//     path: "/Form",
//     element: <Form />
//   },
//   {
//     path: "/AU",
//     element: <AU />
//   },
//   {
//     path: "/Docomo",
//     element: <Docomo />
//   },
//   {
//     path: "/GTN Mobile",
//     element: <GTN />
//   },
//   {
//     path: "/Linemo",
//     element: <Linemo />
//   },
//   {
//     path: "/Mobal",
//     element: <Mobal />
//   },
//   {
//     path: "/Rakuten Mobile",
//     element: <Rakuten />
//   },
//   {
//     path: "/Softbank",
//     element: <Softbank/>
//   },
//   {
//     path: "/UQ Mobile",
//     element: <UQ />
//   },
//   {
//     path: "/Y!mobile",
//     element: <Ymobile />
//   },
// ]);

