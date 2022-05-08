import React from "react";

import CallToActionThree from "../../components/call-to-action/CallToActionThree";

const FancyShortBanner = () => {
  return (
    <React.Fragment>
      <div className="fancy-short-banner-three mt-100 md-mt-40">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
    </React.Fragment>
  );
};

export default FancyShortBanner;
