import React, { PureComponent } from "react";

export default class Promos extends PureComponent {
  render() {
    return (
      <div>
        <div className="py-3 bg-white osahan-promos shadow-sm">
          <div className="d-flex align-items-center px-3 mb-2">
            <h6 className="m-0">Promos for you</h6>
            <a href="/listing" className="ml-auto text-success">
              See more
            </a>
          </div>
          <div className="promo-slider">
            <div className="osahan-slider-item m-2">
              <a href="/product-detail">
                <img
                  src="img/promo1.jpg"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive image"
                />
              </a>
            </div>
            <div className="osahan-slider-item m-2">
              <a href="/product-detail">
                <img
                  src="img/promo2.jpg"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive image"
                />
              </a>
            </div>
            <div className="osahan-slider-item m-2">
              <a href="/product-detail">
                <img
                  src="img/promo3.jpg"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="title d-flex align-items-center mb-3 mt-3 px-3">
          <h6 className="m-0">Pick's Today</h6>
          <a className="ml-auto text-success" href="/">
            See more
          </a>
        </div>
      </div>
    );
  }
}
