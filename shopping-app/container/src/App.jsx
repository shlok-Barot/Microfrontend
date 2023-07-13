import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "products/ProductIndex";
import Cart from "cart/CartIndex";

import "./index.css";

const App = () =>
  <Router>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart-details" element={<Cart />} />
    </Routes>
  </Router>;
ReactDOM.render(<App />, document.getElementById("app"));
