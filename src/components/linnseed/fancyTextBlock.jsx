import React from "react";
import Faq from "../../components/faq/Faq";
const FancyTextBlock = () => {
  return (
    <React.Fragment>
      <div className="fancy-text-block-six mt-250 md-mt-130">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-three mb-35">
                <p>GET STARTED IN MINUTES</p>
                <h2>
                  <span>
                    3 Main Reaosn to{" "}
                    <img src="images/shape/line-shape-3.svg" alt="shape" />
                  </span>
                  Choose us.
                </h2>
              </div>
              {/* End title */}
              <Faq />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div
          className="img-meta-container"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <img src="images/assets/feature-img-08.png" alt="feature" />
          <img
            src="images/shape/22.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/23.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/24.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/25.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/26.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <img
            src="images/shape/27.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <img
            src="images/shape/28.svg"
            alt="shape"
            className="shapes shape-seven"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FancyTextBlock;
