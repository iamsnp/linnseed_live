import React from "react";
import AboutTwo from "../../components/about/AboutTwo";
const FancyTextBlockTwo = () => {
  return (
    <React.Fragment>
      <div className="fancy-text-block-seven mt-150 md-mt-100">
        <div className="bg-wrapper">
          <img
            src="images/shape/29.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/30.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/31.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/32.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/33.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <AboutTwo />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </React.Fragment>
  );
};

export default FancyTextBlockTwo;
