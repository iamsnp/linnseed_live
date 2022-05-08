import React from "react";

import Social from "../../components/social/Social";

const UseableTools = () => {
  return (
    <React.Fragment>
      <div className="useable-tools-section-two bg-shape mb-200 md-mb-90">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="container">
            <div className="title-style-two text-center mb-70 md-mb-10">
              <div className="row">
                <div className="col-lg-10 col-md-11 m-auto">
                  <p>Integrates with your tools</p>
                  <h2>
                    Connect deski with the software you
                    <span>
                      use every
                      <img src="images/shape/line-shape-2.svg" alt="" />
                    </span>
                    day.
                  </h2>
                </div>
              </div>
            </div>
            {/*  /.title-style-two */}

            <div className="icon-wrapper">
              <Social />
            </div>
            {/* /.icon-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
    </React.Fragment>
  );
};

export default UseableTools;
