import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Footer =() =>  {
  // const count = useSelector((state)=> state.counter.value)
  const {cartTotalQuantity} = useSelector(state => state.cart)
    return (
      <div className="osahan-menu-fotter fixed-bottom bg-white text-center border-top">
        <div className="row m-0">
          <Link
            to="/"
            className="text-dark small col font-weight-bold text-decoration-none p-2 "
          >
            <p className="h5 m-0">
              <i className="text-success icofont-grocery" />
            </p>
            Shop
          </Link>
          <Link
            to="/cart"
            className="text-muted col small text-decoration-none p-2"
          >
            <p className="h5 m-0">
              <i className="icofont-food-basket" />
              <span className="badge badge-danger top-50 p-1 ml-1 small">{cartTotalQuantity}</span>
            </p>
            Cart
          </Link>
          
          <Link to="/" className="text-muted small col text-decoration-none p-2">
            <p className="h5 m-0">
              <i className="icofont-user" />
            </p>
            Account
          </Link>
        </div>
      </div>
    );
  }

export default Footer;