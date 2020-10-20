import React, { useRef, useEffect, Fragment } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Link } from "react-router-dom";

// animations
import {
  reveal,
  revealClose,
  handleHover,
  handleHoverExit,
  staggerText,
} from "./Animations";

const Hamburger = ({ state }) => {
  // create variables of our vir-dom nodes
  let menuLayer = useRef(null),
    revealMain = useRef(null),
    revealSecondary = useRef(null),
    link1 = useRef(null),
    link2 = useRef(null),
    // link3 = useRef(null),
    link4 = useRef(null),
    link5 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      revealClose(revealMain, revealSecondary);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([revealMain, revealSecondary], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      reveal(revealMain, revealSecondary);
      staggerText(link1, link2, link4, link5);
    }
  }, [state]);

  return (
    <Fragment>
      <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
        <div
          ref={(el) => (revealMain = el)}
          className="menu-secondary-background-color"
        ></div>
        <div ref={(el) => (revealSecondary = el)} className="menu-layer">
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link1 = el)}
                        to="/"
                      >
                        <a href="/">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link2 = el)}
                        to="/situation"
                      >
                        <a href="#step-container">Solution</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link3 = el)}
                      >
                        Portfolio
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link4 = el)}
                      >
                        <a href="#about-us">About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link5 = el)}
                      >
                        <a href="#solution-section">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hamburger;
