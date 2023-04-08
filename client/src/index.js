import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';

const mobiles = {
  provider: ["Mobal", "Docomo", "AU", "Softbank", "Rakuten Mobile", "Linemo", "Y!mobile","UQ Mobile", "GTN Mobile"]
}

const makeProviderComponents = mobiles.provider.map((provider, index) => {
    return <Provider key={provider} providerId={index + 1}/>
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
