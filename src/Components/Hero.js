import React, { Fragment, Component } from "react";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../images/slider-one.jpg")}
                className="d-block equal-height w-100"
                alt="covid-19-slider-one"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/slider-2.jpg")}
                className="d-block equal-height w-100"
                alt="covid-19-slider-two"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/slider-3.jpg")}
                className="d-block equal-height w-100"
                alt="covid-19-slider-three"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Hero;
