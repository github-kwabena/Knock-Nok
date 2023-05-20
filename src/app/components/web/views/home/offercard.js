import React from "react";
import { Link } from "react-router-dom";

const  Offercard = () => {
  
    return (
      <div>
        <div className="pick_today px-3">
          <div className="row">
            <div className="col-6 pr-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v1.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Chilli</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v2.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Onion</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-6 pr-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v3.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Tomato</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$1/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v4.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Cabbage</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-6 pr-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v5.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Cauliflower</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-2">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  
                  <div className="p-3">
                    <Link to="/listing" className="text-dark">
                      <img
                        src="img/listing/v6.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Carrot</h6>
                    </Link>
                    <div className="d-flex align-items-center">
                      <Link to="/listing" className="text-dark">
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                      </Link>
                      <button
                        to="/cart"
                        className="btn btn-success btn-sm ml-auto"
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
        <div className="title d-flex align-items-center p-3">
          <h6 className="m-0">Recommend for You</h6>
          <Link className="ml-auto text-success" to="/">
            26 more
          </Link>
        </div>
        <div className="osahan-recommend px-3">
          <div className="row">
            <div className="col-12 mb-3">
              <Link
                to="/listing"
                className="text-dark text-decoration-none"
              ></Link>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <Link
                  to="/listing"
                  className="text-dark text-decoration-none"
                >
                  <div className="recommend-slider rounded pt-2">
                    <div className="osahan-slider-item m-2 rounded">
                      <img
                        src="img/recommend/r1.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2 rounded">
                      <img
                        src="img/recommend/r2.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2 rounded">
                      <img
                        src="img/recommend/r3.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-3 position-relative">
                  <Link
                    to="/listing"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Fresh Orange
                    </h6>
                    <p className="text-muted">
                      Orange Great Quality item from Jamaica.
                    </p>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <Link
                to="/listing"
                className="text-dark text-decoration-none"
              ></Link>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <Link
                  to="/listing"
                  className="text-dark text-decoration-none"
                >
                  <div className="recommend-slider rounded pt-2">
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r4.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r5.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r6.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-3 position-relative">
                  <Link
                    to="/listing"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Green Apple
                    </h6>
                    <p className="text-muted">
                      Green Apple Premium item from Vietnam.
                    </p>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <Link
                to="/listing"
                className="text-dark text-decoration-none"
              ></Link>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <Link
                  to="/listing"
                  className="text-dark text-decoration-none"
                >
                  <div className="recommend-slider rounded pt-2">
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r7.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r8.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="osahan-slider-item m-2">
                      <img
                        src="img/recommend/r9.jpg"
                        className="img-fluid mx-auto rounded shadow-sm"
                        alt="Responsive image"
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-3 position-relative">
                  <Link
                    to="/listing"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Fresh Apple
                    </h6>
                    <p className="text-muted">
                      Fresh Apple Premium item from Thailand.
                    </p>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Offercard;