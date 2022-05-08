import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LoginForm from "../../../../components/contact/form/LoginForm";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";

const Login = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Login || Linnseed</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            Want best deals on <br />
            cotton? <Link to="/signup">sign up</Link>
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/linnseed-main">
                <img src="images/logo/brandLogo.png" alt="logo" width="85px" />
              </Link>
            </div>
            <Link className="font-rubik go-back-button" to="/linnseed-main">
              Go to home
            </Link>
          </div>
          <div className="mt-80 md-mt-40">
            <h2>
              Hi buddy, welcome <br /> Back to Linnseed!
            </h2>
            <p className="header-info pt-30 pb-50">
              Still don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>

          <LoginForm />
          {/* Login Form End */}
          <CopyRightTwo />
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default Login;
