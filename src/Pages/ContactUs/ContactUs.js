import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Field, Form, Formik } from "formik";
function ContactUs() {
  return (
    <>
      <NavBar />
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="contact-us">
          <div className="">
            <div className="contact-details">
              <div className=" itemm ">
                <h5 className="fw-bolder">Office</h5>
                <p className="text-secondary mt-3 mb-0 ">
                  1 New York Plaza, New York,
                </p>
                <p className="text-secondary mb-0">NY 10004, USA</p>
              </div>

              <div className=" itemm">
                <h5 className="fw-bolder">Start a Conversation</h5>
                <p className="text-secondary mb-0 mt-3">info@Molla.com</p>
                <p className="text-secondary">
                  +1 987-876-6543, +1 987-976-1234
                </p>
              </div>

              <div className=" itemm">
                <h5 className="fw-bolder">Social</h5>
                <div className="socials mt-3">
                  <img src="/images/5968764.png" alt="facebook" />
                  <img src="/images/3955024.png" alt="instegram" />
                  <img src="/images/3670147.png" alt="youtube" />
                  <img src="/images/2504839.png" alt="twitter" />
                </div>
              </div>
            </div>
          </div>

          <div className="m-5 get-touch">
            <h2 className="text-center fw-bolder ">Get In Touch</h2>
            <p className="text-center p2 fw-bolder mt-4">
              We collaborate with ambitious brands and people; we’d love to
              build <br />
              something great together.
            </p>
            <p className="text-center text-secondary">
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu pulvinar nunc sapien <br /> ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>

            <div className="contactForm">
              <Formik>
                <Form>
                  <div>
                    <label className="d-block mb-2 fw-bolder">Name:</label>
                    <Field  />
                  </div>
                  <div>
                    <label className="d-block mt-3 mb-2 fw-bolder">Email:</label>
                    <Field />
                  </div>
                  <div>
                    <label className="d-block mt-3 mb-2 fw-bolder">Phone:</label>
                    <Field />
                  </div>
                  <div>
                    <label className="d-block mt-3 mb-2 fw-bolder" >Subject:</label>
                    <Field className="sub"/>
                  </div>
                  <div className="text-center">
                    <button className="mt-4" style={{border:"1px solid saddlebrown" , borderRadius:"10px" , padding:"10px" , width:"350px" , backgroundColor:"saddlebrown" , color:"#fff"}}>submit</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ContactUs;