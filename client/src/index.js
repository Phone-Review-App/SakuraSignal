import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';

// const mobiles = {
//   provider:["AU","Docomo","GTN Mobile","Linemo","Mobal","Rakuten Mobile","Softbank","UQ Mobile","Y!mobile"]
// }

// get provider ID
async function fetchAllProvidersNamesAndIds() { 
  return await axios.get("/api/providers/names");
}

// to make each provider components
const providerComponents = async () => {
  const providers = await fetchAllProvidersNamesAndIds();
  console.log(providers.data);
  return providers.data.map(provider => {
    <Route key={provider.name} path={"/" + provider.name}
      element={<Provider key={provider.id} providerId={provider.id} />}
    />
  });

  // mobiles.provider.then(result =>
  //   result.data.map(provider => {
  //     return <Provider key={provider.name + provider.id} providerId={provider.id} />
  //   }))
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RouterProvider router={router} />
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Form" element={<Form />} />
      {
       
      }
      {
        // mobiles.provider.then(result => { 
        //   result.data.map((provider,index) => {
        //     <Route key={provider.name} path={"/" + provider.name} element={providerComponents[index]}/>
        //   })
        // })
      }
      {/* {
        // each providers routes
        mobiles["provider"].map((path, index) => (
        <Route key={path} path={"/"+path} element={makeProviderComponents[index]} />
        ))
      } */}
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

