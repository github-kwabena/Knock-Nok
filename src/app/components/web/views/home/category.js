import React from "react";
import { Link } from "react-router-dom";

const Category =()=> {
  
    return (
      <div className="osahan-body">
        <div className="p-3 osahan-categories">
          <h6 className="mb-2">What are you looking for?</h6>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/1.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                </Link>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/2.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                </Link>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/3.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Meat</p>
                </Link>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/4.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/5.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">
                    Milk &amp; Egg
                  </p>
                </Link>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/6.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Bread</p>
                </Link>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/7.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Frozen</p>
                </Link>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <Link to="/listing">
                  <img src="img/categorie/8.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Organic</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Category;