import React, { Component } from "react";

export default class Successfully extends Component {
  render() {
    return (
      <div>
        <div className="osahan-success bg-success vh-100">
          <div className="p-5 text-center">
            <i className="icofont-check-circled display-1 text-warning" />
            <h1 className="text-white font-weight-bold">
              Code with abhinash, Your order has been successful 🎉
            </h1>
            <p className="text-white">
              Check your order status in
              <a
                href="/order-status"
                className="font-weight-bold text-decoration-none text-white"
              >
                My Order
              </a>
              about next steps information.
            </p>
          </div>
        </div>
        <div className="fixed-bottom fixed-bottom-auto bg-white rounded p-3 m-3 text-center">
          <h6 className="font-weight-bold mb-2">Preparing your order</h6>
          <p className="small text-muted">
            Your order will be prepared and will come soon
          </p>
          <a
            href="/order-status"
            className="btn rounded btn-warning btn-lg btn-block"
          >
            Track My Order
          </a>
        </div>
      </div>
    );
  }
}
