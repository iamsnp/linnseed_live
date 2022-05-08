import React from "react";

import LinnseedMain from "../components/views/linnseedMain";

import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import AboutLinnseed from "../views/inner-pages/pages/about/aboutLinnseed";
import ContactLinnseed from "../views/inner-pages/pages/contact/contactLinnseed";
import Login from "../views/inner-pages/pages/miscellaneous/Login";
import SignUp from "../views/inner-pages/pages/miscellaneous/SignUp";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={LinnseedMain} />
          <Route path="/linnseed-main" component={LinnseedMain} />

          {/* Pages Dropdown Routes */}
          {/* <Route path="/team-1" component={Team1} />
          <Route path="/team-2" component={Team2} />
          <Route path="/team-3" component={Team3} />
          <Route path="/team-4" component={Team4} />
          <Route path="/team-5" component={Team5} />
          <Route path="/team-6" component={Team6} />
          <Route path="/team-details-v1" component={TeamDetailsV1} />
          <Route path="/team-details-v2" component={TeamDetailsV2} /> */}
          {/* faq inner pages */}
          {/* <Route path="/faq" component={Faq} />
          <Route path="/faq-details" component={FaqDetails} />
          contact us inner pages */}
          {/* <Route path="/contact-cs" component={ContactCustomerSupport} />
          <Route path="/contact-eo" component={ContactEventOrganizer} />
          <Route path="/contact-pm" component={ContactProjectManagement} />
          <Route path="/contact-doc" component={ContactDocumentation} /> */}
          <Route path="/contact-linn" component={ContactLinnseed} />
          {/* about us inner pages */}
          <Route path="/about-linn" component={AboutLinnseed} />
          {/* <Route path="/about-cs" component={AboutCustomerSupport} />
          <Route path="/about-eo" component={AboutEventOrganizer} />
          <Route path="/about-pm" component={AboutProjectManagement} />
          <Route path="/about-doc" component={AboutDocumentation} /> */}
          {/* pricing inner pages */}
          {/* <Route path="/pricing-cs" component={PricingCustomerSupport} />
          <Route path="/pricing-eo" component={PricingEventOrganizer} />
          <Route path="/pricing-pm" component={PricingProjectManagement} /> */}

          {/* Feature Dropdown Routes */}
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          {/* <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/solution-management" component={SolutionMangement} />
          <Route
            path="/product-customer-support"
            component={ProductCustomerSupport}
          />
          <Route
            path="/features-customer-support"
            component={FeaturesCustomerSupport}
          /> */}

          {/* Service inner pages */}
          {/* <Route path="/service-v1" component={ServiceV1} />
          <Route path="/service-v2" component={ServiceV2} />
          <Route path="/service-v3" component={ServiceV3} />
          <Route path="/service-v4" component={ServiceV4} />
          <Route path="/service-details" component={ServiceDetails} /> */}

          {/* inner pages Docs   */}
          {/* <Route path="/doc-full-width" component={DocFullWidth} />
          <Route path="/doc-full-width-banner" component={DocFullWidthBanner} />
          <Route path="/doc-box" component={DocBox} />
          <Route path="/doc-box-with-banner" component={DocBoxWithBanner} />
          <Route path="/changelog" component={Changelog} /> */}

          {/* inner Portfolio pages Dropdown   */}
          {/* <Route path="/classic-style" component={PortfolioV1} />
          <Route path="/grid-two-col" component={PortfolioV2} />
          <Route path="/grid-three-col" component={PortfolioV3} />
          <Route path="/gallery-slider" component={PortfolioV4} />
          <Route path="/grid-single" component={PortfolioV5} />
          <Route path="/portfolio-details-v1" component={PortfolioDetailsV1} /> */}

          {/* inner Blog pages Dropdown   */}
          {/* <Route path="/blog-v1" component={BlogV1} />
          <Route path="/blog-v2" component={BlogV2} />
          <Route path="/blog-v3" component={BlogV3} />
          <Route path="/blog-v4" component={BlogV4} />
          <Route path="/blog-v5" component={BlogV5} />
          <Route path="/blog-v6" component={BlogV6} />
          <Route path="/blog-details" component={BlogDetails} /> */}
          {/* <Route path="/404" component={NotFound} /> */}

          {/* NotFound Route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
