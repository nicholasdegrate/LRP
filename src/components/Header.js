import React, { useState, useEffect, Fragment } from "react";
// import { withRouter } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import HomeContact from "./ContactModal";

const Header = ({ history }) => {
  // state of our contact

  const [contact, setContact] = useState({
    initial: false,
    clickedContact: null,
  });
  // state of our contact button
  const [disabledContact, setDisabledContact] = useState(false);

  //Use Effect
  useEffect(() => {
    history.listen(() => {
      setContact({ clickedContact: false });
    });
  }, [history]);

  // toggle contact
  const handleContact = () => {
    disableContact();
    if (contact.initial === false) {
      setContact({
        initial: null,
        clickedContact: true,
      });
    } else if (contact.clickedContact === true) {
      setContact({
        clickedContact: !contact.clickedContact,
      });
    } else if (contact.clickedContact === false) {
      setContact({
        clickedContact: !contact.clickedContact,
      });
    }
  };

  // dropdown
  const [dropdownItem, setDropdownItem] = useState({
    open: false,
  });
  const handleButtonClick = () => {
    setDropdownItem((state) => {
      return {
        open: !state.open,
      };
    });
  };

  const container = React.createRef();

  const disableContact = () => {
    setDisabledContact(!disabledContact);
    setTimeout(() => {
      setDisabledContact(false);
    });
  };

  return (
    <div id="nav-wrapper">
      <nav>
        {/* company title */}
        <h1>Legacy Rebuild Properties</h1>
        {/* mobile nav container */}
        {/* <div className="mobile-nav">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div> */}
        {/* end mobile container */}

        {/* desktop nav container */}
        <div className="desktop-nav">
          <ul>
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
                Testimonies
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
          </ul>
        </div>
        {/* end desktop nav container */}

        {/* desktop nav contact */}
        <div className="desktop-nav-contact">
          <ul>
            <li>
              <button
                id="contactBtn"
                disabled={disabledContact}
                onClick={handleContact}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        {/* end desktop nav contact */}
      </nav>
      <HomeContact contact={contact} setContact={setContact} />
    </div>
  );
};
export default withRouter(Header);
