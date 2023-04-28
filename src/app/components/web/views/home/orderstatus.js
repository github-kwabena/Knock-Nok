import React, { Component } from "react";

export default class Orderstatus extends Component {
  render() {
    return (
      <div>
        <div className="osahan-status">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <a
                className="font-weight-bold text-success text-decoration-none"
                href="/order-status"
              >
                <i className="icofont-rounded-left back-page" />
              </a>
              <span className="font-weight-bold ml-3 h6 mb-0">ID #321PDRS</span>
              <a className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
          <div className="p-3 status-order border-bottom bg-white">
            <p className="small m-0">
              <i className="icofont-ui-calendar" /> 16 June, 11:30AM
            </p>
          </div>
          <div className="p-3 border-bottom">
            <h6 className="font-weight-bold">Order Status</h6>
            <div className="tracking-wrap">
              <div className="my-1 step active">
                <span className="icon text-success">
                  <i className="icofont-check-circled" />
                </span>
                <span className="text small">Preparing order</span>
              </div>
              <div className="my-1 step active">
                <span className="icon text-danger">
                  <i className="icofont-close-circled" />
                </span>
                <span className="text small">Ready to collect</span>
              </div>
              <div className="my-1 step">
                <span className="icon text-danger">
                  <i className="icofont-close-circled" />
                </span>
                <span className="text small">On the way </span>
              </div>
              <div className="my-1 step">
                <span className="icon text-danger">
                  <i className="icofont-close-circled" />
                </span>
                <span className="text small">Delivered Order</span>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom bg-white">
            <h6 className="font-weight-bold">Destination</h6>
            <p className="m-0 small">
              554 West 142nd Street, New York, NY 10031
            </p>
          </div>
          <div className="p-3 border-bottom">
            <p className="font-weight-bold small mb-1">Courier</p>
            <img src="img/logo.svg" className="img-fluid sc-osahan-logo mr-2" />
            <span className="small text-success font-weight-bold">
              Grocery Courier
            </span>
          </div>
          <div className="p-3 border-bottom bg-white">
            <div className="d-flex align-items-center mb-2">
              <h6 className="font-weight-bold mb-1">Total Cost</h6>
              <h6 className="font-weight-bold ml-auto mb-1">$8.52</h6>
            </div>
            <p className="m-0 small text-muted">
              You can check your order detail here,
              <br />
              Thank you for order.
            </p>
          </div>
        </div>
        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center border-top">
          <div className="row">
            <div className="col selected">
              <a href="/" className="text-muted small text-decoration-none">
                <p className="h4 m-0">
                  <i className="icofont-grocery" />
                </p>
                Shop
              </a>
            </div>
            <div className="col">
              <a href="/cart" className="text-muted small text-decoration-none">
                <p className="h4 m-0">
                  <i className="icofont-cart" />
                </p>
                Cart
              </a>
            </div>
            <div className="col">
              <a
                href="/order-status"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="text-success icofont-bag" />
                </p>
                My Order
              </a>
            </div>
            <div className="col">
              <a href="" className="text-muted small text-decoration-none">
                <p className="h4 m-0">
                  <i className="icofont-user" />
                </p>
                Account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
