import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Cart from "./cartNo";

const App = () =>
  <div className="container">
    <Cart />
  </div>;
ReactDOM.render(<App />, document.getElementById("app"));
