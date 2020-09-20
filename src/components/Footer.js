import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
//svg
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import youtube from "../img/youtube.svg";

export default function Footer() {
  let date = new Date();
  return (
    <footer>
      <section className="footer-top">
        <div className="footer-top-container">
          <h2>Legacy Rebuild Properties</h2>
          <p>
            *Due to certain Covid-19 restrictions, we reserve the right to
            request recent pictures, and/or videos of your property, instead of
            visiting in person to prevent having to enter your home.
          </p>
          <ul className="social-media-container">
            <li>
              <a href="https://www.instagram.com/legacyrebuildproperties/">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Legacyrebuildproperties/?eid=ARCoo9t0zcZi_pgrhxNdh8mQeCZ2dYqyQotNotZsS_sFnecEZlEs6TuPZsNS3uVtlCX7cmEiKZXMkFIn">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCpLeUSyEWplM6rmiYD5L-Xg/videos?view_as=subscriber">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-footer">
          <ul>
            <div className="nav-footer-left">
              <li>
                <LinkScroll
                  activeClass="active"
                  to="home-header"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="homepage-one"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  testimonies
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="homepage-three"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Vision
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="homepage-five"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  FAQ
                </LinkScroll>
              </li>
            </div>
            <div className="nav-footer-right">
              <li>
                <Link>Contact</Link>
              </li>
            </div>
          </ul>
        </div>
      </section>
      <section className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2020 Legacy Rebuild Properties, LLC all right revsered</p>
        </div>
      </section>
    </footer>
  );
}
