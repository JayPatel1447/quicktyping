import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "./Components/Index/IndexPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// To use context api or Redux later on
const ROUTING = (
      <BrowserRouter>
          <div>
              
              <Route exact path="/" component={Index} />
              <Route exact path="/dashboard" component={Dashboard}/>
          </div>
          
      </BrowserRouter>
);
ReactDOM.render(ROUTING, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
