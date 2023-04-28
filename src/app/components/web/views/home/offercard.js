import React, { Component } from "react";

export default class Offercard extends Component {
  render() {
    return (
      <div>
        <div className="pick_today px-3">
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
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
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
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
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
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
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
                        <h6 className="price m-0 text-success">$1.8/kg</h6>
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
                        <h6 className="price m-0 text-success">$0.8/kg</h6>
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
        <div className="title d-flex align-items-center p-3">
          <h6 className="m-0">Recommend for You</h6>
          <a className="ml-auto text-success" href="/">
            26 more
          </a>
        </div>
        <div className="osahan-recommend px-3">
          <div className="row">
            <div className="col-12 mb-3">
              <a
                href="/product-detail"
                className="text-dark text-decoration-none"
              ></a>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <a
                  href="/product-detail"
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
                </a>
                <div className="p-3 position-relative">
                  <a
                    href="/product-detail"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Fresh Orange
                    </h6>
                    <p className="text-muted">
                      Orange Great Quality item from Jamaica.
                    </p>
                  </a>
                  <div className="d-flex align-items-center">
                    <a
                      href="/product-detail"
                      className="text-dark text-decoration-none"
                    >
                      <h6 className="m-0">$8.8/kg</h6>
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
            <div className="col-12 mb-3">
              <a
                href="/product-detail"
                className="text-dark text-decoration-none"
              ></a>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <a
                  href="/product-detail"
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
                </a>
                <div className="p-3 position-relative">
                  <a
                    href="/product-detail"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Green Apple
                    </h6>
                    <p className="text-muted">
                      Green Apple Premium item from Vietnam.
                    </p>
                  </a>
                  <div className="d-flex align-items-center">
                    <a
                      href="/product-detail"
                      className="text-dark text-decoration-none"
                    >
                      <h6 className="m-0">$10.8/kg</h6>
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
            <div className="col-12 mb-3">
              <a
                href="/product-detail"
                className="text-dark text-decoration-none"
              ></a>
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <a
                  href="/product-detail"
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
                </a>
                <div className="p-3 position-relative">
                  <a
                    href="/product-detail"
                    className="text-dark text-decoration-none"
                  >
                    <h6 className="mb-1 font-weight-bold text-success">
                      Fresh Apple
                    </h6>
                    <p className="text-muted">
                      Fresh Apple Premium item from Thailand.
                    </p>
                  </a>
                  <div className="d-flex align-items-center">
                    <a
                      href="/product-detail"
                      className="text-dark text-decoration-none"
                    >
                      <h6 className="m-0">$12.8/kg</h6>
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
        </div>
      </div>
    );
  }
}
