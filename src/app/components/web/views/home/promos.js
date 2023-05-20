import React, { PureComponent } from "react";
import {Link} from 'react-router-dom';

export default class Promos extends PureComponent {
  render() {
    return (
      <div>
        <div className="py-3 bg-white osahan-promos shadow-sm">
          <div className="d-flex align-items-center px-3 mb-2">
            <h6 className="m-0">Promos for you</h6>
            <Link to="/listing" className="ml-auto text-success">
              See more
            </Link>
          </div>
          <div className="promo-slider">
            <div className="osahan-slider-item m-2">
              <Link to="/listing"> 
                <img
                  src="img/promo1.png"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive"
                />
              </Link>
            </div>
            <div className="osahan-slider-item m-2">
              <Link to="/listing">
                <img
                  src="img/promo2.jpg"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive"
                />
              </Link>
            </div>
            <div className="osahan-slider-item m-2">
              <Link to="/listing">
                <img
                  src="img/promo3.jpg"
                  className="img-fluid mx-auto rounded"
                  alt="Responsive"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="title d-flex align-items-center mb-3 mt-3 px-3">
          <h6 className="m-0">Pick's Today</h6>
          <Link className="ml-auto text-success" to="/listing">
            See more
          </Link>
        </div>
      </div>
    );
  }
}
