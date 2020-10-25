import React, { useState, Fragment } from "react";
import { Button } from "@chakra-ui/core";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core";

// component
import Header from "../components/Header";
import HomeContact from "../components/ContactModal";
// imgs
import house from "../img/houseMainPage.jpg";
import livingRoom from "../img/livingRoom.jpg";
import group from '../img/group.svg';
import book from '../img/open-book.svg';
import vote from '../img/positive-vote.svg';


export const Home = () => {
  const [contact, setContact] = useState({
    initial: false,
    clickedContact: null,
  });
  // state of our contact button
  const [disabledContact, setDisabledContact] = useState(false);

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

  const disableContact = () => {
    setDisabledContact(!disabledContact);
    setTimeout(() => {
      setDisabledContact(false);
    });
  };

  return (
    <Fragment>
      <section id="covid">
        <h1>Covid</h1>
      </section>
      <header id="home-header">
        <Header />
        <section class="header-main-info">
          <div className="header-main-info-top">
            <h2>TIME TO REBUILD YOUR LEGACY</h2>
            <div id="callToAction">
              <p>
                Call us today to get a competitive
                <br /> cash offer for your home!
              </p>
              <Button size="md"
                height="48px"
                width="200px"
                border="2px"
                rightIcon="arrow-forward"
                bg="#1A8801"
                borderColor="#1A8801"
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
                disabled={disabledContact}
                onClick={handleContact}>
                Contact Us
              </Button>
            </div>
          </div>
          {/*  header page slider */}
          <div className="header-main-info-bottom">
            <img src={house} alt="living room" />
          </div>
        </section>
      </header>
      {/* end header  */}

      {/* main section */}
      <section className="main-section-homepage">
        {/* begin homepage one */}
        <section className="homepage-one">
          <h3>Testimonials</h3>
          <h2>Who uses Legacy Rebuild Properties...</h2>
          <h3 id="clients-name">Mary M.</h3>
          <p>
            " I was extremely pleased with how I was treated and how high the
            bid was for my home. They were honest, respectful, and handled my
            granddaughter and I as if we were family."
          </p>
        </section>
        {/* end homepage one  */}
        <section className="homepage-three">
          <div className="homepage-three-top">
            <h3>VISIONS</h3>
            <h2>
            Our vision is to help you gain a fresh
start with a no-hassle approach and offering you a competitive cash offer for your house
            </h2>
          </div>
          <div className="homepage-three-left">
            <img src={livingRoom} alt="room" />
          </div>
          <div className="homepage-three-right">
            <ul>
              <li>
                <h2> <img src={group} alt=""/> Who We Are</h2>
                <p>
                At Legacy Rebuild Properties our mission is to reach out and help as many homeowners as possible. Over the years, we have become experts on educating and assisting homeowners through the process of selling their house. With all the constant changes from day to day occurring in the banking industry, you need someone you can trust to offer open and honest advice and aid you in making the right decision at such a life-altering moment. The best part is our advice is 100% free to you as the homeowner. If you have any questions about selling your home fast, and receiving a competitive cash offer right away, give us a call today.
                </p>
              </li>
              <li>
                <h2><img src={book} alt=""/> Our Philosophy</h2>
                <p>
                We understand at times life just happens. Maybe you are experiencing a job loss, a divorce, expensive medical bills, tax liens, foreclosure, troubled tenants, or an unexpected inheritance causing financial stress. We want to help you prevent harming your lifestyle, credit, peace of mind, and most importantly your legacy. We can help you rebuild sooner than you think.
                </p>
              </li>
              <li>
                <h2> <img src={vote} alt=""/> Our Specialty</h2>
                <p>
                With over 20 years of home mortgage experience our expert advice comes in the form of providing options that will allow you to sell your house quickly and put some much needed cash in your pockets without harming your lifestyle or credit in the process. We are just a phone call away.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* end homepage three */}
        <section id="homepage-four-wrapper">

        <section className="homepage-four">
      
          <div className="homepage-four-bottom">
            <div className="bottom-left">
              <h3>SOLUTIONS</h3>
              <h2>
              No matter the condition of your house or any situation you are experiencing, we have an immediate solution for you
              </h2>
            </div>
            <div className="bottom-right">

            </div>
          </div>
        </section>

        </section>
        {/* hompage five */}
        <section className="homepage-five">
          <ul>
            <li className="choose-title-container">
              <h3>WHY CHOOSE US</h3>
              <h2>
                Frequently Asked
                <br /> Questions
              </h2>
            </li>
            <Accordion allowToggle>
         
         <AccordionItem >
           <AccordionHeader className='faq-wrapper-box' _expanded={{ bg: "#165a87", color: "white" }}>
             <Box className='faq-box' flex="1" textAlign="left" >
             Who typically sells us their home?
             </Box>
             <AccordionIcon />
           </AccordionHeader>
           
           <AccordionPanel pb={4}>
               People from all walks of life sell to us, but they all share one
               thing in common: They want to sell their house to a trusted
               professional, who can make them an immediate cash offer, and
               close quickly; while ensuring integrity during the entire
               process.
           </AccordionPanel>
         </AccordionItem>

         <AccordionItem>
           <AccordionHeader className='faq-wrapper-box' _expanded={{ bg: "#165a87", color: "white" }}>
             <Box className='faq-box' flex="1" textAlign="left">
             Will you pay market value for my home?
             </Box>
             <AccordionIcon />
           </AccordionHeader>
           <AccordionPanel pb={4}>
           Our company is, first and foremost, tenured real estate
               investors. We invest tons of time and upfront money to renovate
               homes, and we only make a profit once we sell the home in its
               updated condition (a high risk at times). Once our team has
               evaluated the condition of your home, we will then make a
               competitive, no-obligation cash offer based on the current
               market value of your home after a successful renovation,
               discounting all associated renovation costs!
           </AccordionPanel>
         </AccordionItem>

         <AccordionItem>
           <AccordionHeader className='faq-wrapper-box' _expanded={{ bg: "#165a87", color: "white" }}>
             <Box className='faq-box' flex="1" textAlign="left">
             Do you charge a fee for visiting my house and making an offer?
             </Box>
             <AccordionIcon />
           </AccordionHeader>
           <AccordionPanel pb={4}>
           *NO! We will provide you with a completely free estimate.
           </AccordionPanel>
         </AccordionItem>

         <AccordionItem>
           <AccordionHeader className='faq-wrapper-box' _expanded={{ bg: "#165a87", color: "white" }}>
             <Box className='faq-box' flex="1" textAlign="left">
             What if I have more questions before deciding to sell -my home?
             </Box>
             <AccordionIcon />
           </AccordionHeader>
           <AccordionPanel pb={4}>
           Please feel free to contact us and discuss any additional questions over the phone, we love speaking with clients and helping them feel at ease during the process of selling us their home. You can send us your question(s) online or call us directly: 817-480-1556.
           </AccordionPanel>
         </AccordionItem>

       </Accordion>
          
          </ul>
        </section>
        {/* end homepage five */}
    
      </section>
      {/* main section homepage */}
      <HomeContact contact={contact} setContact={setContact} />
    </Fragment>
  );
};
