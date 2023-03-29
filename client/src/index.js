import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Homepage";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Form" element={<Form />} />
          <Route path="AU" element={<AU />} />
          <Route path="Docomo" element={<Docomo />} />
          <Route path="GTN" element={<GTN />} />
          <Route path="Linemo" element={<Linemo />} />
          <Route path="Mobal" element={<Mobal />} />
          <Route path="Rakuten" element={<Rakuten />} />
          <Route path="Softbank" element={<Softbank />} />
          <Route path="UQ" element={<UQ />} />
          <Route path="Ymobile" element={<Ymobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

