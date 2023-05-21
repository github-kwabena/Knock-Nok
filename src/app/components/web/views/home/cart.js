import React, {useEffect, useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import {addToCart, decreaseCart, getTotals } from "../../../../redux/features/cartSlice";
import { auth, provider } from "../../../../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import Checkout from "./checkout";
const Cart = ()=>{
    const [value,setValue] = useState('');
    const handleClick = ( ) => {
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
      })
    }
    useEffect(()=>{
      setValue(localStorage.getItem("email"))
    })
    const cart = useSelector((state)=> state.cart);
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(getTotals());
    },[cart, dispatch])
    
    const handleDecreaseCart = (cartItem) =>{
      dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) =>{
      dispatch(addToCart(cartItem));
    }
    return (
      <div>
        <div className="osahan-cart">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="font-weight-bold m-0">Cart</h5>
              <Link className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </Link>
            </div>
          </div>
        </div>
        <div className="osahan-body">
        {
          cart.cartItems.length === 0 ? (
            <diV>
              
              <div>
                <p>Your cart is currently empty</p>
                <Link to="/listing">
                  <span>Start Shopping</span>
                </Link>
              </div>
            </diV>

          ):
          (
        <>{cart.cartItems?.map(cartItem =>(
          <div className="cart-items bg-white position-relative border-bottom">
          <div className="d-flex align-items-center p-3">
            <img src={cartItem.ProductImage} className="img-fluid" />
            <div
              href="/product-detail"
              className="ml-3 text-dark text-decoration-none w-100"
            >
              <h5 className="mb-1">{cartItem.ProductName}</h5>
              <p className="text-muted mb-2">
                {cartItem.ProductPrice}
              </p>
              <div className="d-flex align-items-center">
                <p className="total_price font-weight-bold m-0">${cartItem.ProductPrice} /kg</p>
                <div className="input-group input-spinner ml-auto cart-items-number">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-success btn-sm"
                      type="button"
                      id="button-plus"
                      onClick={()=>handleIncreaseCart(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  <div className="form-control">
                    {cartItem.cartQuantity}
                  </div>
                  <div className="input-group-append">
                    <button
                      className="btn btn-success btn-sm"
                      type="button"
                      id="button-minus"
                      onClick={()=>handleDecreaseCart(cartItem)}
                    >
                      −
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        </>
          
        )}
        
          
          <div className="p-3 mt-4">
            { value?<Checkout/>:
            <Link onClick={handleClick} className="text-decoration-none">
              <div className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                <div className="more">
                  <h6 className="m-0">Subtotal ${cart.cartTotalAmount}</h6>
                  <p className="small m-0">Proceed to checkout</p>
                </div>
              <div className="ml-auto">
                  <i className="icofont-simple-right" />
              </div>
              </div>
            </Link>
          }
          </div>
          
          
          <div className="p-4 mt-0">
          
          <Link to ="/listing">
          <div className="ml-auto">
            <i className="icofont-arrow-left"/>
          </div>
          
            <h6 className="m-0">Continue shopping</h6>
          </Link>
          </div>
          
        </div>

        <Footer/>
      </div>
   
    );
  }
export default Cart;
