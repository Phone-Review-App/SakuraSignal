import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Provider from './pages/Provider';
import providers from "./data/providers.json"

const makeProviderComponents = providers.map((provider, index) => {
  return <Provider key={index} provider_id={provider.provider_id} />
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Form" element={<Form />} />
      {
        providers.map((provider, index) => (
          <Route key={index + 10} path={provider.path} element={makeProviderComponents[index]} />
        ))
      }
    </Routes>
  </Router>
);
