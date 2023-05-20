import React from 'react'

import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../../redux/features/counterSlice";
import Footer from '../../../footer'
import { addToCart } from '../../../../redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';
const Products = ({singleProduct}) => { 
  //console.log(products[0])
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  
  //const odd = products.filter((element,index)=> index % 2 !==0)
  //console.log(odd);
  
  // console.log(even.map((p)=>p.ProductName));
  const navigate = useNavigate();
  // const handleAddToCart =(o) => {
  //   dispatch(addToCart(o));
  //   navigate("/cart")
  // }
  // function handleAddToCartE(e){
  //   dispatch(addToCart(e));
  //   navigate("/cart")
  // }
  const handleAddToCart = (singleProduct) =>{
    dispatch(addToCart(singleProduct));
    navigate("/cart");
  }
  return(
    <>
        
        
            
            <div className="osahan-listing bg-white">
                
                
                <div className="col-10 p-0 mt-2 ml-3 ">
                   <div className="list-card-image">
                      <div className="p-3">
                        <Link to="/listing" className="text-dark">
                           <img
                            src={singleProduct.ProductImage}
                            className="img-fluid item-img w-100 mb-3"
                          />
                          <h6>{singleProduct.ProductName}</h6>
                        </Link>
                        <div className="d-flex align-items-center">
                          <h6 className="price m-0 text-success">{singleProduct.ProductPrice}</h6>
                          <button
                            type="button"
                            id="button-plus"
                            onClick={()=>handleAddToCart(singleProduct)}
                            className="btn btn-success btn-sm ml-auto"
                            >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
               
                
            
           
                  
                </div>
                
                  <Footer/>
            </div>  
          
        
    </>
  )
  
}

export default Products
