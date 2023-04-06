import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';

const mobiles = {
  // from DB
  provider:["AU","Docomo","GTN Mobile","Linemo","Mobal","Rakuten Mobile","Softbank","UQ Mobile","Y!mobile"]
}

// get provider ID
const fetchProviderNameAndID = async() => { 
  const providerIDandName = await axios.get("/api/providers/");
}


const ProviderComponents = mobiles.provider.map((path,index) => { 
  return <Provider key={path} providerId={index}/>
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RouterProvider router={router} />
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Form" element={<Form />} />
      {
        // each providers routes
        mobiles["provider"].map((path, index) => (
        <Route key={path} path={"/"+path} element={ProviderComponents[index]} />
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

