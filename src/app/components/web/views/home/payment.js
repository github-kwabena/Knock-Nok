import React, { Component } from "react";

export default class Payment extends Component {
  render() {
    return (
      <div>
        <div className="osahan-payment">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <a
                className="font-weight-bold text-success text-decoration-none"
                href="/"
              >
                <i className="icofont-rounded-left back-page" />
              </a>
              <h6 className="font-weight-bold m-0 ml-3">Payment Method</h6>
              <a className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
          <div className="payment p-3">
            <div className="accordion" id="accordionExample">
              <div className="osahan-card rounded shadow-sm bg-white mb-3">
                <div className="osahan-card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center border-0 btn btn-outline-success bg-white text-decoration-none text-success w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="icofont-credit-card mr-3" /> Credit/Debit
                      Card
                      <i className="icofont-rounded-down ml-auto" />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="osahan-card-body p-3 border-top">
                    <h6 className="m-0">Add new card</h6>
                    <p className="small">
                      WE ACCEPT
                      <span className="osahan-card ml-2 font-weight-bold">
                        ( Master Card / Visa Card / Rupay )
                      </span>
                    </p>
                    <form>
                      <div className="form-row">
                        <div className="col-md-12 form-group">
                          <label className="form-label font-weight-bold small">
                            Card number
                          </label>
                          <div className="input-group">
                            <input
                              placeholder="Card number"
                              type="number"
                              className="form-control"
                            />
                            <div className="input-group-append">
                              <button
                                id="button-addon2"
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="icofont-credit-card" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 form-group">
                          <label className="form-label font-weight-bold small">
                            Valid through(MM/YY)
                          </label>
                          <input
                            placeholder="Enter Valid through(MM/YY)"
                            type="number"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="form-label font-weight-bold small">
                            CVV
                          </label>
                          <input
                            placeholder="Enter CVV Number"
                            type="number"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <label className="form-label font-weight-bold small">
                            Name on card
                          </label>
                          <input
                            placeholder="Enter Card number"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-checkbox1"
                              className="custom-control-input"
                            />
                            <label
                              title
                              type="checkbox"
                              htmlFor="custom-checkbox1"
                              className="custom-control-label small pt-1"
                            >
                              Securely save this card for a faster checkout next
                              time.
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="osahan-card rounded shadow-sm bg-white mb-3">
                <div className="osahan-card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center btn text-decoration-none text-success w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="icofont-globe mr-3" /> Net Banking
                      <i className="icofont-rounded-down ml-auto" />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="osahan-card-body p-3 border-top">
                    <form>
                      <div
                        className="btn-group btn-group-toggle w-100"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-outline-secondary active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            defaultChecked
                          />
                          HDFC
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option2" />{" "}
                          ICICI
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option3" />{" "}
                          AXIS
                        </label>
                      </div>
                      <div className="form-row pt-3">
                        <div className="col-md-12 form-group">
                          <label className="form-label small font-weight-bold">
                            Select Bank
                          </label>
                          <br />
                          <select className="custom-select form-control">
                            <option>Bank</option>
                            <option>KOTAK</option>
                            <option>SBI</option>
                            <option>UCO</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="osahan-card rounded shadow-sm bg-white mb-3">
                <div className="osahan-card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center btn text-decoration-none text-success w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="icofont-dollar mr-3" /> Cash on Delivery
                      <i className="icofont-rounded-down ml-auto" />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="border-top">
                    <div className="card-body">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlAutosizing"
                        >
                          <b>Cash</b>
                          <br />
                          <p className="small text-muted m-0">
                            Please keep exact change handy to help us serve you
                            better
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom">
          <a href="/checkout" className="btn btn-success btn-block">
            Continue
          </a>
        </div>
      </div>
    );
  }
}
