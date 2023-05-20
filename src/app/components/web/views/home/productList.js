import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../../redux/features/counterSlice";
import { Link }from 'react-router-dom';
import Footer from "../../../footer";
// import { ProductsContext } from "../../../../global/ProductsContext";


const  ProductList = () => { 
      //const{ products } = useContext(ProductsContext);
      //console.log(products)
      const count = useSelector((state)=> state.counter.value)
      const dispatch = useDispatch()
      return (
      <div>
        <div className="osahan-listing">
          <div className="p-3">
            <div className="d-flex align-items-center">
              <Link
                className="font-weight-bold text-success text-decoration-none"
                to="/"
              >
                <i className="icofont-rounded-left back-page" />
              </Link>
              <span className="font-weight-bold ml-3 h6 mb-0">Groceries</span>
              <Link className="toggle ml-auto" to="#">
                <i className="icofont-navigation-menu" />
              </Link>
            </div>
          </div>
          <div className="osahan-listing px-3 bg-white">
            <div className="row border-bottom border-top">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v1.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Chilli</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      <button
                        type="button"
                        id="button-plus"
                        onClick={()=>dispatch(increment())}
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link  to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v2.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Onion</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <div className="text-dark">
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
                      </div>
                      <button
                              className="btn btn-success btn-sm ml-auto"
                              type="button"
                              id="button-plus"
                              onClick={()=>dispatch(increment())}
                            >
                              +
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v3.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Tomato</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$2.5/kg</h6>
                      <button
                        type="button"
                        id="button-plus"
                        onClick={()=>dispatch(increment())}
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v4.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Cabbage</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      <button
                        type="button"
                        id="button-plus"
                        onClick={()=>dispatch(increment())}
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v5.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Cauliflower</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
                      <button
                        type="button"
                        id="button-plus"
                        onClick={()=>dispatch(increment())}
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                       </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v6.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Carrot</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      <button
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v7.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Star Anise</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$2.5/kg</h6>
                      <button 
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v8.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Brinjal</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      <button
                        
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v9.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Capsicum</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$2.5/kg</h6>
                      <button
                        
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v10.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Lady Finger</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      <button
                        
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v11.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Garlic</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                        <h6 className="price m-0 text-success">$2.5/kg</h6>
                      <button
                        
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <div className="p-3">
                    <Link to="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v12.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Ginger</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      </Link>
                      <button
                        
                        className="btn btn-success btn-sm ml-auto"
                        onClick={()=>dispatch(increment())}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default ProductList;