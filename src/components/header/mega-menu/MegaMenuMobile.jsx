import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
];

const Miscellaneous = [
  {
    name: "Terms & Condition)",
    routerPath: "terms-conditions",
  },
  {
    name: "Login",
    routerPath: "/login",
  },
  {
    name: "Signup",
    routerPath: "/signup",
  },
  {
    name: "404",
    routerPath: "/404",
  },
];
const Portfolio = [
  {
    name: "Classic Style",
    routerPath: "/classic-style",
  },
  {
    name: "Grid 2 Columns",
    routerPath: "grid-two-col",
  },
];
const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "blog-v2",
  },
];
const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
];

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <div className="logo position-static">
            <a href="index.html">
              <img
                src="/images/logo/brandLogo.png"
                alt="home-demo"
                width="70"
              />
            </a>
          </div>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close-w.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/buyer">Buyer</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/seller">Seller</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about-linn">About Us</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact-linn">Contact Us</Link>
            </MenuItem>

            {/* End Home SubMenu */}

            <SubMenu title="Others">
              {/* End About SubMenu */}

              {/* End Contact Us SubMenu */}

              <SubMenu title="Team" className="plus alt">
                {Team.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu>
              {/* End Team SubMenu */}
              <MenuItem>
                {" "}
                <Link to="/faq"> FAQ</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/faq-details"> Faq Details</Link>
              </MenuItem>
            </SubMenu>
            {/* End Pages SubMenu */}

            <SubMenu title="Portfolio">
              {Portfolio.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Portfolio SubMenu */}

            <SubMenu title="Docs">
              {Docs.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Docs SubMenu */}
            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">SignUp</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
