import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import iconPhone from "../../assets/Images/phone.png";
import iconMail from "../../assets/Images/envelope.png";
import iconLocate from "../../assets/Images/locate.png";
import mapImg from "../../assets/Images/map.png";

const Contact = () => {
  return (
    <section className="contact-sec container">
      <div className="contact-one text-md-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/contact" className="text-decoration-none">
              Contact
            </Link>
          </span>
        </p>
      </div>

      {/* ============================= */}

      <div className="contact-two px-3 text-md-start py-4 d-flex flex-column align-items-md-start gap-5 mb-3">
        <h2 className="m-0">Contact</h2>

        {/* ============ */}

        <div className="all-media d-flex align-items-center justify-content-between">
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconPhone} alt="" />
              <p className="m-0 reach">Phone number</p>
            </div>
            <p className="m-0 get">+234 8124374721</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconMail} alt="" />
              <p className="m-0 reach">Email</p>
            </div>
            <p className="m-0 get">afedayo@gmail.com</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconLocate} alt="" />
              <p className="m-0 reach">Address place</p>
            </div>
            <p className="m-0 get">
              No 18, Dailey Street, Shomolu, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* ===================================== */}

      <div className="loc-con d-flex align-items-center justify-content-between">
        <img src={mapImg} alt="" />

        <form className="con-form text-start d-flex flex-column align-items-md-start gap-5">
          <div className="d-flex flex-column gap-4">
            <h3>Contact Us</h3>
            <div className="con-inp d-flex flex-column gap-4">
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                placeholder="Your name"
              />
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                placeholder="Phone number"
              />
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                placeholder="Email address"
              />
              <textarea
                className="px-3 py-2 rounded-3"
                rows="5"
                name=""
                id=""
                placeholder="Write your comment here..."
              ></textarea>
            </div>
          </div>

          <button className="px-4 py-2 rounded-4 border-0">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
