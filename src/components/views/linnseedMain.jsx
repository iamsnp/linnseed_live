import React from "react";
import { Helmet } from "react-helmet";
import FeatureFour from "../../components/features/FeatureFour";
import CounterThreeColored from "../../components/counter/CounterThreeColored";
import FooterLinn from "../../components/footer/footerLinn";
import CopyRightThree from "../../components/footer/CopyRightThree";
import HeaderThree from "../../components/header/HeaderThree";
import HeroBannerThree from "../../components/hero-banner/HeroBannerThree";
import UseableTools from "../../components/linnseed/useableTools";
import ClientFeedback from "../../components/linnseed/clientFeedback";
import FancyShortBanner from "../../components/linnseed/fancyShortBanner";
import FancyTextBlock from "../../components/linnseed/fancyTextBlock";
import FancyTextBlockTwo from "../../components/linnseed/fancyTextBlockTwo";
import FancyTextBlockThree from "../../components/linnseed/fancyTextBlockThree";

const LinnseedMain = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Linnseed</title>
      </Helmet>
      {/* End Page SEO Content */}
      <HeaderThree />
      <HeroBannerThree />
      <div className="fancy-feature-four mt-20">
        <div className="bg-wrapper">
          {/* <img
            src="images/shape/18.svg"
            alt="shape"
            className="shapes shape-right"
          />
          <img
            src="images/shape/19.svg"
            alt="shape"
            className="shapes shape-left"
          /> */}
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto">
                  <p>What we do</p>
                  <h2>
                    Use Linnseed to drive growth at{" "}
                    <span>
                      your business.{" "}
                      <img src="images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <img
                src="images/shape/20.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/21.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>

      <FancyTextBlock />

      <div className="counter-with-icon-one pt-200 md-pt-80">
        <div className="container">
          <CounterThreeColored />
        </div>
      </div>

      <FancyTextBlockTwo />

      <FancyTextBlockThree />
      {/*=====================================================
				Useable Tools contains social block also
			===================================================== */}
      <UseableTools />

      <ClientFeedback />

      <FancyShortBanner />

      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterLinn />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightThree />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default LinnseedMain;
