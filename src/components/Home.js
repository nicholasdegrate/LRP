import React, { useState, Fragment } from "react";
import { Button } from "@chakra-ui/core";
// component
import Header from "../components/Header";
import HomeContact from "../components/ContactModal";
// imgs
import house from "../img/houseMainPage.jpg";
import livingRoom from "../img/livingRoom.jpg";
import WaveTop from '../img/minorWaveTop.svg';
import waveBottom from '../img/minorWave.svg';
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
            <h3>"VISIONS"</h3>
            <h2>
              Our vision is to help you gain a fresh
              <br /> start using a no-hassle approach
            </h2>
          </div>
          <div className="homepage-three-left">
            <img src={livingRoom} alt="room" />
          </div>
          <div className="homepage-three-right">
            <ul>
              <li>
                <h2>Who We Are</h2>
                <p>
                  Hello, here at Legacy rebuild properties our is mission to
                  reach out and help as many distressed homeowners as possible.
                  Over the years, we have become experts on educating and
                  assisting homeowners through their foreclosure process. With
                  all the constant changes from day to day occurring in the
                  banking industry, you, the Homeowner, need someone you can
                  trust to offer you open and honest advice to aid you in making
                  the right decision at such a life-altering moment. The best
                  part about our mission is our advice is 100% free to you as
                  the homeowner. If you have any questions about your current
                  situation and would like to speak with a local expert for
                  friendly advice, please give us a call right away!
                </p>
              </li>
              <li>
                <h2>Our Philosophy</h2>
                <p>
                  We understand there are times that life just happens, whether
                  we are prepared for it or not. And unfortunately during those
                  times you experience a major financial blow that you just
                  cannot recover from and begin "robbing from Peter to pay
                  Paul". We want to help you prevent harming your lifestyle,
                  credit, peace of mind, and most importantly your legacy. We
                  will help you rebuild!
                </p>
              </li>
              <li>
                <h2>Our Specialty</h2>
                <p>
                  We have over 20 years in home mortgage experience ranging from
                  loan origination, foreclosure, bankruptcy, and modification
                  options. However, our best expert advice comes in the form of
                  providing options that will allow you as a -home owner to sell
                  your home and put some much needed cash in your pockets to
                  start a new chapter in your life without -harming your credit.
                  We're just a phone call away.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* end homepage three */}
        <section id="homepage-four-wrapper">

          <div className="minor-wave-top">
            <img src={WaveTop} alt=""/>
          </div>
        <section className="homepage-four">
      
          <div className="homepage-four-bottom">
            <div className="bottom-left">
              <h3>"SOLUTIONS"</h3>
              <h2>
                No matter the condition or situation we will buy your property!
              </h2>
            </div>
            <div className="bottom-right">
              {/* <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque sapiente consequatur animi totam impedit blanditiis
                illo facilis quia molestiae! Totam, tenetur. Tempora, similique.
                Illo blanditiis, ullam expedita quod quo temporibus?
              </p> */}
            </div>
          </div>
        </section>

        <div className="minor-wave-bottom">
            <img src={waveBottom} alt=""/>
         </div>
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
            <li>
              <div className="choose-response">
                <h3>Who typically sells us their home?</h3>
              </div>
              <p>
                People from all walks of life sell to us, but they all share one
                thing in common: They want to sell their house to a trusted
                professional, who can make them an immediate cash offer, and
                close quickly; while ensuring integrity during the entire
                process.
              </p>
            </li>
            <li>
              <div className="choose-response">
                <h3>Will you pay market value for my home?</h3>
              </div>
              <p>
                Our company is, first and foremost, tenured real estate
                investors. We invest tons of time and upfront money to renovate
                homes, and we only make a profit once we sell the home in its
                updated condition (a high risk at times). Once our team has
                evaluated the condition of your home, we will then make a
                competitive, no-obligation cash offer based on the current
                market value of your home after a successful renovation,
                discounting all associated renovation costs!
              </p>
            </li>
            <li>
              <div className="choose-response">
                <h3>Will you pay market value for my home?</h3>
              </div>
              <p>
                Yes! We even buy townhouses, duplexes, and multi-tenant
                buildings.
              </p>
            </li>
            <li>
              <div className="choose-response">
                <h3>
                  Do you charge a fee for visiting my house and making an offer?
                </h3>
              </div>
              <p>*NO! We will provide you with a completely free estimate.</p>
            </li>
            <li>
              <div className="choose-response">
                <h3>
                  What if I have more questions before deciding to sell -my
                  home?
                </h3>
              </div>
              <p>
                Please feel free to contact us and discuss any additional
                questions over the phone, we love speaking with clients and
                helping them feel at ease during the process of selling us their
                home. You can send us your question(s) online or call us
                directly: 817-480-1556.
              </p>
            </li>
          </ul>
        </section>
        {/* end homepage five */}
    
      </section>
      {/* main section homepage */}
      <HomeContact contact={contact} setContact={setContact} />
    </Fragment>
  );
};
