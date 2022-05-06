import React from "react";

import Testimonial from "../../components/testimonial/Testimonial";

const ClientFeedback = () => {
  return (
    <React.Fragment>
      <div className="client-feedback-slider-one pt-50 pb-170 md-pb-80">
        <div className="shapes-holder">
          <img src="images/shape/39.svg" alt="shape" />
          <img
            src="images/shape/42.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/media/img_21.png"
            alt="shape"
            className="cp-img-one"
          />
          <img
            src="images/media/img_22.png"
            alt="shape"
            className="cp-img-two"
          />
          <img
            src="images/media/img_23.png"
            alt="shape"
            className="cp-img-three"
          />
          <img
            src="images/media/img_24.png"
            alt="shape"
            className="cp-img-four"
          />
          <div className="title-style-two">
            <h2>
              What’s <br />
              Our Client Say <br />
              About Us.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <div className="feedback-meta">
                <div className="watermark font-gilroy-bold">Feedback</div>
                <img src="images/icon/30.svg" alt="shape" className="icon" />
                <div className="clientSliderOne">
                  <Testimonial />
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    </React.Fragment>
  );
};

export default ClientFeedback;
