import React, { Component } from "react";

export default class Orderaddress extends Component {
  render() {
    return (
      <div>
        <div className="osahan-order_address">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <a
                className="font-weight-bold text-success text-decoration-none"
                href="/cart"
              >
                <i className="icofont-rounded-left back-page" />
              </a>
              <h5 className="font-weight-bold m-0 ml-3">Select Address</h5>
              <button
                type="button"
                className="btn btn-outline-success btn-sm ml-auto"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add
              </button>
              <a className="toggle ml-3" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
          <div className="p-3">
            <div className="custom-control custom-radio px-0 mb-3 position-relative border-custom-radio">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                className="custom-control-input"
                defaultChecked
              />
              <label
                className="custom-control-label w-100"
                htmlFor="customRadioInline1"
              >
                <div>
                  <div className="p-3 bg-white rounded shadow-sm w-100">
                    <div className="d-flex align-items-center mb-2">
                      <p className="mb-0 h6">Home</p>
                      <p className="mb-0 badge badge-success ml-auto">
                        Default
                      </p>
                    </div>
                    <p className="small text-muted m-0">1001 Veterans Blvd</p>
                    <p className="small text-muted m-0">
                      Redwood City, CA 94063
                    </p>
                    <p className="pt-2 m-0 text-right">
                      <span className="small">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="text-decoration-none text-dark"
                        >
                          Edit
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div className="custom-control custom-radio px-0 position-relative border-custom-radio">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label
                className="custom-control-label w-100"
                htmlFor="customRadioInline2"
              >
                <div>
                  <div className="p-3 rounded bg-white shadow-sm w-100">
                    <div className="d-flex align-items-center mb-2">
                      <p className="mb-0 h6">Work</p>
                    </div>
                    <p className="small text-muted m-0">Model Town, Ludhiana</p>
                    <p className="small text-muted m-0">Punjab 141002, India</p>
                    <p className="pt-2 m-0 text-right">
                      <span className="small">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="text-decoration-none text-dark"
                        >
                          Edit
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="fixed-bottom">
          <a href="/payment" className="btn btn-success btn-lg btn-block">
            Continue
          </a>
        </div>
      </div>
    );
  }
}
