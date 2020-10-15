import React, { useEffect, useRef } from "react";
import { CloseButton, Button } from "@chakra-ui/core";
import { gsap } from "gsap";
import { HomeForm } from "./Form";

import { revealContact, revealCloseContact } from "./Animations";

const HomeContact = ({ contact, setContact }) => {
  let contactLayer = useRef(null),
    revealContactSide = useRef(null);

  // revealContactSecondarySide = useRef(null);
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (contact.clickedContact === false) {
      // If menu is closed and we want to open it.

      revealCloseContact(revealContactSide);
      // Set menu to display none
      gsap.to(contactLayer, { duration: 1, css: { display: "none" } });
    } else if (
      contact.clickedContact === true ||
      (contact.clickedContact === true && contact.initial === null)
    ) {
      // Set menu to display block
      gsap.to(contactLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      if (window.innerWidth <= "700") {
        gsap.to(revealContactSide, {
          duration: 0,
          opacity: 1,
          width: "100%",
        });
        revealContact(revealContactSide);
        console.log("yes");
      } else {
        gsap.to(revealContactSide, {
          duration: 0,
          opacity: 1,
          width: "50%",
        });
        revealContact(revealContactSide);
        console.log("no");
      }
      // revealContact(revealContactSide);
    }
  }, [contact]);

  const handleClose = () => {
    if (contact.clickedContact === true) {
      revealCloseContact(revealContactSide);
      setContact({
        clickedContact: !contact.clickedContact,
      });
    }
  };

  return (
    <div ref={(el) => (contactLayer = el)} id="nav-contact-wrapper">
      <div ref={(el) => (revealContactSide = el)} className="contact-bg">
        <div className="contact-wrapper">
          <div className="close-contact-btn">
            <Button   
                height='30px'
                width='30px'
                bg='#fff'
                borderRadius='5px'
                size="sm"
                border="none"
                outline="none"
                cursor="pointer"
                _hover={{ bg: "#165A87", color: "#fff", transition: "all .3s ease-in .1s" }}
                _active={{
                  bg: "#165A87", color: "#fff", transition: "all .3s ease-in .1s",
                }}
                // _focus={{
                //   boxShadow:
                //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                // }}
             onClick={handleClose}>
              <p><CloseButton  height='30px'
                width='30px'
                bg='#fff'
                borderRadius='5px'
                size="sm"
                border="none"
                outline="none"
                cursor="pointer"
                _hover={{ bg: "#165A87", color: "#fff", transition: "all .3s ease-in .1s" }}
                _active={{
                  bg: "#165A87", color: "#fff", transition: "all .3s ease-in .1s",
                }}
                // _focus={{
                //   boxShadow:
                //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                // }}
                size="md" cursor='pointer' /></p>
            </Button>
          </div>
          <div id="contact-container">
            <HomeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
