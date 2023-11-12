import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';
import providers from "./data/providers.json"

/*
const mobiles = {
  provider: ["Mobal", "Docomo", "AU", "Softbank", "Rakuten Mobile", "Linemo", "Y!mobile","UQ Mobile", "GTN Mobile"]
}
*/

const mobiles = {
  provider: ["mobal", "docomo", "au", "softbank", "rakutenmobile", "linemo", "ymobile", "uqmobile", "gtnmobile"]
};

// const makeProviderComponents = mobiles.provider.map((provider, index) => {
  const makeProviderComponents = providers.map((provider, index) => {
    return <Provider key={index} providerId={provider.provider_id}/>
    // return <Provider key={provider} providerId={index + 1}/>
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Form" element={<Form />} />
      {
        // mobiles["provider"].map((path, index) => (
          providers.map((provider, index) => (
          <Route key={index+10} path={provider.path} element={makeProviderComponents[index]} />
        // <Route key={path} path={"/"+path} element={makeProviderComponents[index]} />
        ))
      }
    </Routes>
  </Router>
);
