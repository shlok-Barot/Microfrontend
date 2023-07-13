import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ProductList from "./productList";
import Cart from "cart/CartIndex";

const App = () =>
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart-details" element={<Cart />} />
    </Routes>
  </Router>;
ReactDOM.render(<App />, document.getElementById("app"));
