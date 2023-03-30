import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Router() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="./AU">AU</Link>
          </li>
          <li>
            <Link to="./Docomo">Docomo</Link>
          </li>
          <li>
            <Link to="./Linemo">LINEMO</Link>
          </li>
          <li>
            <Link to="./Mobal">Mobal</Link>
          </li>
          <li>
            <Link to="./Rakuten">Rakuten</Link>
          </li>
          <li>
            <Link to="./Softbank">Softbank</Link>
          </li>
          <li>
            <Link to="./UQ">UQ</Link>
          </li>
          <li>
            <Link to="./GTN">GTN</Link>
          </li>
          <li>
            <Link to="./Ymobile">YMobile</Link>
          </li>
          <li>
            <Link to="Form">Form</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Router;