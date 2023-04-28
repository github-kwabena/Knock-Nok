import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../web/views/home";
import ProductList from "./views/home/productList";
import Productdetail from "./views/home/productdetail";
import Cart from "./views/home/cart";
import Orderaddress from "./views/home/orderaddress";
import Payment from "./views/home/payment";
import Checkout from "./views/home/checkout";
import Successfully from "./views/home/successfully";
import Orderstatus from "./views/home/orderstatus";
export default class rootRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listing" component={ProductList} />
          <Route exact path="/product-detail" component={Productdetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order-address" component={Orderaddress} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/successfully" component={Successfully} />
          <Route exact path="/order-status" component={Orderstatus} />
        </Switch>
      </div>
    );
  }
}
