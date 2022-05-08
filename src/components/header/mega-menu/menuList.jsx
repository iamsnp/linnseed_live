import React from "react";
import { Link } from "react-router-dom";

const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
  {
    name: "Team Version 03",
    routerPath: "/team-3",
  },
  {
    name: "Team Version 04",
    routerPath: "/team-4",
  },
  {
    name: "Team Version 05",
    routerPath: "/team-5",
  },
  {
    name: "Team Version 06",
    routerPath: "/team-6",
  },
  {
    name: "Team Details",
    routerPath: "/team-details-v1",
  },
  {
    name: "Team Details Slider",
    routerPath: "/team-details-v2",
  },
];

const Portfolio = [
  {
    name: "Grid 3 Columns",
    routerPath: "grid-three-col",
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

const MenuList = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item  position-static active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item  position-static ">
          <a className="nav-link" href="#">
            Buyer
          </a>
        </li>
        <li className="nav-item  position-static ">
          <a className="nav-link" href="#">
            Seller
          </a>
        </li>
        <li className="nav-item  position-static ">
          <a className="nav-link" href="about-linn">
            About Us
          </a>
        </li>
        <li className="nav-item  position-static ">
          <a className="nav-link" href="contact-linn">
            Contact Us
          </a>
        </li>

        {/* End li */}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Others
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu dropdown">
              <a
                href="#"
                className="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
              >
                Team
              </a>
              <ul className="dropdown-menu">
                {Team.map((val, i) => (
                  <li key={i}>
                    <Link to={val.routerPath} className="dropdown-item">
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link className="dropdown-item" to="/faq">
                {" "}
                FAQ
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/faq-details">
                {" "}
                Faq Details
              </Link>
            </li>
          </ul>
          {/* /.dropdown-menu */}
        </li>
        {/* End li */}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Products
          </a>
          <ul className="dropdown-menu">
            {Portfolio.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath} className="dropdown-item">
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* /.dropdown-menu */}
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Docs
          </a>
          <ul className="dropdown-menu">
            {Docs.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath} className="dropdown-item">
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* /.dropdown-menu */}
        </li>

        {/* End li */}
      </ul>
    </div>
  );
  // End navbar nav mega menu main
};

export default MenuList;
