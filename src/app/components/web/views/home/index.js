import React, { Component } from "react";
import Category from "./category";
import Promos from "./promos";
import Offercard from "./offercard";
import Header from "../../../header";
import Footer from "../../../footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home-wrap">
        <Header />
        <Category />
        <Promos />
        <Offercard />
        <Footer />
      </div>
    );
  }
}
