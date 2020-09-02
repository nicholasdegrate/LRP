import React, { Component, useRef, useEffect } from "react";
import gsap from "gsap";
// component
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { HomeForm } from "../components/Form";
// svg
import apartment from "../img/apartment.svg";
// imgs
import house from "../img/houseMainPage.jpg";
import shawn1 from "../img/shawn1.jpg";
import shawn2 from "../img/shawn2.jpg";
import shawn3 from "../img/shawn3.jpg";
import shawn4 from "../img/shawn4.jpg";
import shawn5 from "../img/shawn5.jpg";
import aboutUs from "../img/shawnBaby.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
          <section class="header-main-info">
            <div className="header-main-info-top">
              <h2>TIME TO REBUILD YOUR LEGACY</h2>
              <p>Call us today to get a competitive cash offer for your home</p>
            </div>

            {/*  header page slider */}
            <div className="header-main-info-bottom">
              <div className="header-page-slider">
                {/* <ul>
                  <li className="header-slider-num">
                    <h2>01/05</h2>
                  </li>
                  <li className="header-slider-content">
                    <h2>Modern House</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </li>
                  <li className="btn-container-header">
                    <button className="prev">
                      <img src={leftarrow} alt="arrow" className="left-arrow" />
                    </button>
                    <button className="next">
                      <img
                        className="arrow-rotate"
                        src={rightarrow}
                        alt="arrow"
                      />
                    </button>
                  </li>
                </ul> */}
              </div>
              {/* end header page slider */}

              <img src={house} alt="living room" />

              {/* header contact form */}
              <HomeForm />
              {/* <div className="header-contact-form">
                <form>
                  <div className="form-wrapper">
                    <div className="form-input-container">
                      <h2>Get your House Quote</h2>
                      <div className="form-input">
                        <label>Name</label>
                        <input type="text" placeholder="Enter name" />
                      </div>
                    </div>
                    <div className="form-input-container">
                      <div className="form-input">
                        <label>Phone</label>
                        <input type="text" placeholder="Enter phone" />
                      </div>
                    </div>
                    <div className="form-input-container">
                      <div className="form-input">
                        <label>Email</label>
                        <input type="text" placeholder="Enter email" />
                      </div>
                    </div>
                    <div className="form-input-container">
                      <div className="form-input">
                        <label>Message</label>
                        <input type="text" placeholder="Enter thoughts" />
                      </div>
                    </div>
                    <div className="form-input-container checkbox ">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <p>
                        I agree to the Terms of service and Term of Privacy
                        policy of Legacy Rebuild Properties comapny
                      </p>
                    </div>
                  </div>
                  <button>CONTACT US</button>
                </form>
              </div> */}
              {/* end form */}
            </div>
          </section>
        </header>
        {/* end header  */}

        {/* main section */}
        <section className="main-section-homepage">
          {/* begin homepage one */}
          <section className="homepage-one">
            <h3>CUSTOMERS</h3>
            <h2>Who uses Legacy Rebuild Properties</h2>
            <p>Big Brands, small businesses and individuals</p>
          </section>
          {/* end homepage one  */}

          {/* <section className="homepage-two">
            <div className="homepage-two-top">
              <h3>SOLUTIONS</h3>
              <h2>
                Solutions designed for all
                <br /> your needs
              </h2>
            </div>
            <div className="homepage-two-left">
              <ul>
                <div>
                  <li>Co-working</li>
                  <li>Private room</li>
                  <li>conferences</li>
                  <li>Weekly Office</li>
                </div>
              </ul>
            </div>
            <div className="homepage-two-right">
              <img src={room} alt="room" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                doloribus architecto quos accusamus unde fugiat repudiandae
                aliquid recusandae temporibus modi, inventore dolores repellat
                eos dolorem culpa aliquam, iste, neque consequatur!
              </p>
            </div>
          </section> */}
          {/* end homepage two */}

          <section className="homepage-three">
            <div className="homepage-three-top">
              <h3>VISIONS</h3>
              <h2>
                Our vision in Legacy Rebuild Properties to
                <br /> make something
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                excepturi impedit officia error odio? Consequuntur optio itaque
                molestias numquam dolor similique, esse libero vero voluptatum a
                nobis accusamus temporibus sequi.
              </p>
            </div>
            <div className="homepage-three-left">
              <img src={house} alt="room" />
            </div>
            <div className="homepage-three-right">
              <ul>
                <li>
                  {/* <img src={apartment} alt="" /> */}
                  <h2>Who We Are</h2>
                  <p>
                    Hello, we are Monica and Shawn, and we are on a mission to
                    reach out and help as many distressed homeowners as
                    possible. Over the years, we have become experts on
                    educating and assisting homeowners through their foreclosure
                    process. With all the constant changes from day to day
                    occurring in the banking industry, you, the Homeowner, need
                    someone you can trust to offer you open and honest advice to
                    aid you in making the right decision at such a life-altering
                    moment. The best part about our mission is our advice is
                    100% free to you as the homeowner. If you have any questions
                    about your current situation and would like to speak with a
                    local expert for friendly advice, please give us a call
                    right away!
                  </p>
                </li>
                <li>
                  {/* <img src={apartment} alt="" /> */}
                  <h2>Our Philosophy</h2>
                  <p>
                    We understand there are times that life just happens,
                    whether we are prepared for it or not. And unfortunately
                    during those times you experience a major financial blow
                    that you just cannot recover from and begin "robbing from
                    Peter to pay Paul". We want to help you prevent harming your
                    lifestyle, credit, peace of mind, and most importantly your
                    legacy. We will help you rebuild.!
                  </p>
                </li>
                <li>
                  {/* <img src={apartment} alt="" /> */}
                  <h2>Our Specialty</h2>
                  <p>
                    We have over 20 years in home mortgage experience ranging
                    from loan origination, foreclosure, bankruptcy, and
                    modification options. However, our best expert advice comes
                    in the form of providing options that will allow you as a
                    -home owner to sell your home and put some much needed cash
                    in your pockets to start a new chapter in your life without
                    -harming your credit. We're just a phone call away.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* end homepage three */}

          <section className="homepage-four">
            <div className="homepage-four-top">
              <img src={aboutUs} alt="room" />
            </div>
            <div className="homepage-four-bottom">
              <div className="bottom-left">
                <h3>SOLUTIONS</h3>
                <h2>
                  The Legacy Rebuild Properties all
                  <br /> view experience Technology
                </h2>
              </div>
              <div className="bottom-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque sapiente consequatur animi totam impedit blanditiis
                  illo facilis quia molestiae! Totam, tenetur. Tempora,
                  similique. Illo blanditiis, ullam expedita quod quo
                  temporibus?
                </p>
              </div>
            </div>
          </section>
          {/* hompage five */}
          <section className="homepage-five">
            <ul>
              <li className="choose-title-container">
                <h3>WHY CHOOSE US</h3>
                <h2>
                  The benefits that will make you
                  <br /> comfort
                </h2>
              </li>
              <li>
                <div className="choose-response">
                  {/* <img src={apartment} alt="apartment svg" /> */}
                  <h3>Who typically sells us their home?</h3>
                </div>
                <p>
                  People from all walks of life sell to us, but they all share
                  one thing in common: They want to sell their house to a
                  trusted professional, who can make them an immediate cash
                  offer, and close quickly; while ensuring integrity during the
                  entire process.
                </p>
              </li>
              <li>
                <div className="choose-response">
                  {/* <img src={apartment} alt="apartment svg" /> */}
                  <h3>Will you pay market value for my home?</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ratione maxime maiores dolores facilis non!
                </p>
              </li>
              <li>
                <div className="choose-response">
                  {/* <img src={apartment} alt="apartment svg" /> */}
                  <h3>Will you pay market value for my home?</h3>
                </div>
                <p>
                  Yes! We even buy townhouses, duplexes, and multi-tenant
                  buildings.
                </p>
              </li>
              <li>
                <div className="choose-response">
                  {/* <img src={apartment} alt="apartment svg" /> */}
                  <h3>
                    Do you charge a fee for visiting my house and making an
                    offer?
                  </h3>
                </div>
                <p>*NO! We will provide you with a completely free estimate.</p>
              </li>
              <li>
                <div className="choose-response">
                  {/* <img src={apartment} alt="apartment svg" /> */}
                  <h3>
                    What if I have more questions before deciding to sell -my
                    home?
                  </h3>
                </div>
                <p>
                  Please feel free to contact us and discuss any additional
                  questions over the phone, we love speaking with clients and
                  helping them feel at ease during the process of selling us
                  their home. You can send us your question(s) online or call us
                  directly: 817-888-8285.
                </p>
              </li>
            </ul>
          </section>
          {/* end homepage five */}

          <section className="homepage-six">
            <div className="homepage-six-card-1">
              <h3>Blog</h3>
              <h2>Giving Back to the Community</h2>
            </div>
            <div className="homepage-six-card-2">
              <img src={shawn1} alt="room" />
            </div>
            <div className="homepage-six-card-3 card">
              <img src={shawn2} alt="room" />
            </div>
            <div className="homepage-six-card-4 card">
              <img src={shawn3} alt="room" />
            </div>
            <div className="homepage-six-card-5 card">
              <img src={shawn4} alt="room" />
            </div>
            <div className="homepage-six-card-6 card">
              <img src={shawn5} alt="room" />
            </div>
            <div className="homepage-six-card-7"></div>
          </section>
          <section className="homepage-seven">
            <div className="homepage-seven-top"></div>
            <div className="homepage-seven-bottom"></div>
          </section>
        </section>
        {/* main section homepage */}
      </div>
    );
  }
}
