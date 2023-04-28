import React, { Component } from "react";

export default class Productdetail extends Component {
  render() {
    return (
      <div>
        <div className="p-3 bg-white">
          <div className="d-flex align-items-center">
            <a
              className="font-weight-bold text-success text-decoration-none"
              href="/"
            >
              <i className="icofont-rounded-left back-page" /> Back
            </a>
            <a
              className="ml-auto font-weight-bold text-white text-decoration-none"
              href="/"
            >
              <i className="icofont-heart p-2 bg-danger shadow-sm rounded-circle" />
            </a>
            <a
              className="font-weight-bold text-white text-decoration-none ml-2"
              href="#"
            >
              <i className="icofont-share p-2 bg-success shadow-sm rounded-circle" />
            </a>
            <a className="toggle ml-3" href="#">
              <i className="icofont-navigation-menu" />
            </a>
          </div>
        </div>
        <div className="px-3 bg-white pb-3">
          <div className="pt-0">
            <h2 className="font-weight-bold">Valencia Orange - Imported</h2>
            <p className="font-weight-light text-dark m-0 d-flex align-items-center">
              Product MRP : <b className="h6 text-dark m-0">$263.00</b>
              <span className="badge badge-danger ml-2">50% OFF</span>
            </p>
            <a href="/">
              <div className="rating-wrap d-flex align-items-center mt-2">
                <ul className="rating-stars list-unstyled">
                  <li>
                    <i className="icofont-star text-warning" />
                    <i className="icofont-star text-warning" />
                    <i className="icofont-star text-warning" />
                    <i className="icofont-star text-warning" />
                    <i className="icofont-star" />
                  </li>
                </ul>
                <p className="label-rating text-muted ml-2 small">
                  (245 Reviews)
                </p>
              </div>
            </a>
          </div>
          <div className="pt-2">
            <div className="row">
              <div className="col-6">
                <p className="font-weight-bold m-0">Delivery</p>
                <p className="text-muted m-0">Free</p>
              </div>
              <div className="col-6">
                <p className="font-weight-bold m-0">Available in:</p>
                <p className="text-muted m-0">1 kg, 2 kg, 5 kg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="osahan-product">
          <div className="product-details">
            <div className="recommend-slider py-1">
              <div className="osahan-slider-item m-2">
                <img
                  src="img/recommend/r1.jpg"
                  className="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div className="osahan-slider-item m-2">
                <img
                  src="img/recommend/r2.jpg"
                  className="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div className="osahan-slider-item m-2">
                <img
                  src="img/recommend/r3.jpg"
                  className="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
            </div>
            <div className="details">
              <div className="p-3 bg-white">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-group osahan-radio btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-secondary active">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        defaultChecked
                      />{" "}
                      4 pcs
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option2" /> 6 pcs
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option3" /> 1 kg
                    </label>
                  </div>
                  <a className="ml-auto" href="/cart">
                    <div className="input-group input-spinner ml-auto cart-items-number">
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-success btn-sm"
                          type="button"
                          id="button-plus"
                        >
                          +
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={1}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-success btn-sm"
                          type="button"
                          id="button-minus"
                        >
                          −
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="p-3">
                <div className="input-group mb-3 rounded shadow-sm overflow-hidden bg-white">
                  <div className="input-group-prepend">
                    <button className="border-0 btn btn-outline-secondary text-success bg-white">
                      <i className="icofont-search" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="shadow-none border-0 form-control form-control-lg pl-0"
                    placeholder="Type your city (e.g Chennai, Pune)"
                    aria-label
                    aria-describedby="basic-addon1"
                  />
                </div>
                <p className="font-weight-bold mb-2">Product Details</p>
                <p className="text-muted small">
                  High quality Fresh Orange fruit exporters from South Korea for
                  sale. All citrus trees belong to the single genus Citrus and
                  remain almost entirely interfertile. This includes
                  grapefruits, lemons, limes, oranges, and various other types
                  and hybrids. The fruit of any citrus tree is considered a
                  hesperidium, a kind of modified berry; it is covered by a rind
                  originated by a rugged thickening of the ovary wall.
                </p>
                <p className="font-weight-bold mb-3">Maybe You Like this.</p>
                <div className="row">
                  <div className="col-6 pr-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-danger">10%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v1.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Chilli</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">
                                $0.8/kg
                              </h6>
                            </a>
                            <a
                              href="/cart"
                              className="btn btn-success btn-sm ml-auto"
                            >
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-danger">5%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v2.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Onion</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">
                                $1.8/kg
                              </h6>
                            </a>
                            <a
                              href="/cart"
                              className="btn btn-success btn-sm ml-auto"
                            >
                              +
                            </a>
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
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-warning">5%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v3.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Tomato</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">$1/kg</h6>
                            </a>
                            <a className="ml-auto" href="/cart">
                              <div className="input-group input-spinner ml-auto cart-items-number">
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-success btn-sm"
                                    type="button"
                                    id="button-plus"
                                  >
                                    +
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={1}
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-success btn-sm"
                                    type="button"
                                    id="button-minus"
                                  >
                                    −
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-warning">15%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v4.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Cabbage</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">
                                $0.8/kg
                              </h6>
                            </a>
                            <a
                              href="/cart"
                              className="btn btn-success btn-sm ml-auto"
                            >
                              +
                            </a>
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
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-success">10%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v5.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Cauliflower</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">
                                $1.8/kg
                              </h6>
                            </a>
                            <a
                              href="/cart"
                              className="btn btn-success btn-sm ml-auto"
                            >
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <a href="/product-detail" className="text-dark">
                          <div className="member-plan position-absolute">
                            <span className="badge m-3 badge-success">10%</span>
                          </div>
                        </a>
                        <div className="p-3">
                          <a href="/product-detail" className="text-dark">
                            <img
                              src="img/listing/v6.jpg"
                              className="img-fluid item-img w-100 mb-3"
                            />
                            <h6>Carrot</h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <a href="/product-detail" className="text-dark">
                              <h6 className="price m-0 text-success">
                                $0.8/kg
                              </h6>
                            </a>
                            <a
                              href="/cart"
                              className="btn btn-success btn-sm ml-auto"
                            >
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed-bottom pd-f bg-white d-flex align-items-center border-top">
              <a href="/cart" className="btn-warning py-3 px-5 h4 m-0">
                <i className="icofont-cart" />
              </a>
              <a href="/cart" className="btn btn-success btn-block">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
