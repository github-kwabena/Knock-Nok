import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../web/views/home";

import Productdetail from "./views/home/productdetail";
import Cart from "./views/home/cart";
import Orderaddress from "./views/home/orderaddress";
import Payment from "./views/home/payment";
import Checkout from "./views/home/checkout";
import Successfully from "./views/home/successfully";
import Orderstatus from "./views/home/orderstatus";
import AddProduct from "./views/home/addProduct";

export default class RootRoutes extends Component {
  render() {
    return (
      <div>
          <Routes>
          <Route  path="/" element={<Home/>} />
          
          <Route  path="/product-detail" element={<Productdetail/>} />
          <Route  path="/cart" element={<Cart/>} />
          <Route  path="/order-address" element={<Orderaddress/>} />
          <Route  path="/payment" element={<Payment/>} />
          <Route  path="/checkout" element={<Checkout/>} />
          <Route  path="/successfully" element={<Successfully/>} />
          <Route  path="/order-status" element={<Orderstatus/>} />
          <Route  path="/listing" element={<AddProduct/>} />
          </Routes>
      </div>
    );
  }
}
