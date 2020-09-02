import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div id="nav-wrapper">
      <nav>
        {/* company title */}
        <h1>
          <Link>LRP</Link>
        </h1>
        {/* mobile nav container */}
        <div className="mobile-nav">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {/* end mobile container */}

        {/* desktop nav container */}
        <div className="desktop-nav">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Properties
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* end desktop nav container */}

        {/* desktop nav contact */}
        <div className="desktop-nav-contact">
          <ul>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Partners</Link>
            </li>
          </ul>
        </div>
        {/* end desktop nav contact */}
      </nav>
    </div>
  );
};

export default Nav;
