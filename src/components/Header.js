import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/core"

import { Link, withRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import Hamburger from "./Hamburger";
import HomeContact from "./ContactModal";

// images 
import logo from "../img/logo.svg";
import wave from '../img/wave.svg';

const Header = ({ history }) => {
  
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // state of our contact

  const [contact, setContact] = useState({
    initial: false,
    clickedContact: null,
  });
  // state of our contact button
  const [disabledContact, setDisabledContact] = useState(false);

   // State of our button
   const [disabledMenu, setDisabledMenu] = useState(false);

  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);
  //Use Effect
  useEffect(() => {
    history.listen(() => {
      setContact({ clickedContact: false });
    });
  }, [history]);


  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
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
    // Determine if out menu button should be disabled
    const disableMenu = () => {
      setDisabledMenu(!disabledMenu);
      setTimeout(() => {
        setDisabledMenu(false);
      });
    };
  

  return (
    <div id="nav-wrapper">
      <div className='wave-bg'>
      <img src={wave} alt=""/>

      </div>
      <nav>
        {/* company title */}
        <h1></h1>
        <div className='logo'>
          <img src={logo} alt=""/>
        </div>
        {/* mobile nav container */}
        <div className="mobile-nav">
          <div className="hamburger">
            <button
             disabled={disabledMenu}
             onClick={handleMenu}
            >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </button>
          </div>
        </div>
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
              <Button
            size="sm"
            border="2px"
            bg="#1A8801"
            borderColor="#1A8801"
            leftIcon="email"
            cursor="pointer"
            color="#fff"
            _hover={{ bg: "#fff", color: "#000", transition: "all .3s ease-in .1s" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
                id="contactBtn"
                disabled={disabledContact}
                onClick={handleContact}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
        {/* end desktop nav contact */}
      </nav>
      <Hamburger state={state} />
      <HomeContact contact={contact} setContact={setContact} />
    </div>
  );
};
export default withRouter(Header);
