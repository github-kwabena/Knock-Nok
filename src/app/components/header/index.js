//eslint-disable-next-line
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const [term, setTerm ] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(term)
  }
  //const count = useSelector((state)=> state.counter.value)
  const {cartTotalQuantity} = useSelector(state => state.cart)
  
  return (
    <div>
      <div className="osahan-home-page">
        <div className="border-bottom p-3">
          <div className="title d-flex align-items-center">
            <Link
              to="/"
              relative="path"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <img className="osahan-logo mr-2" src="img/logo.svg" alt='log' />
              <h4 className="font-weight-bold text-success m-0">KNOCK NOK</h4>
            </Link>
            <p className="ml-auto m-0">
              <Link 
              to="/cart" 
              relative="path" 
              className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
                <i className="text-dark icofont-food-basket" />
                <span className="badge badge-danger p-1 ml-1 small">{cartTotalQuantity}</span>
              </Link>
            </p>
            <Link className="toggle ml-3" to="/">
              <i className="icofont-navigation-menu" />
            </Link>
          </div>
            <form 
              onSubmit={submitHandler}
              className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
              <div className="input-group-prepend">
                <button type="submit" className="border-0 btn btn-outline-secondary text-success bg-white">
                  <i className="icofont-search" />
                </button>
              </div>
             <input
                type="text"
                className="shadow-none border-0 form-control pl-0"
                value={term}
                onChange={(e)=> setTerm(e.target.value)}
                placeholder="Search for Products.."
              />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Header;
