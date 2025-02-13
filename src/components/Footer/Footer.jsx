import React from "react";
import "./Footer.css";
import footimg from "../../../public/foooootimg.png";
import footlogo from "../../../public/footlogo.png";
import ig from "../../../public/ig.png";
import x from "../../../public/x.png";
import fb from "../../../public/fb.png";
import pin from "../../../public/pin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="position-relative">
      <img className="foot-img position-relative" src={footimg} alt="" />
      <div className="inn-footer text-start d-flex align-items-start position-absolute">
        <div className="foot-one d-flex flex-column">
          <div className="d-flex flex-column align-items-start gap-lg-3 gap-1">
            <Link>
              <img src={footlogo} alt="" className="footloog" />
            </Link>
            <p className="m-0">
              Nunc consequat interdum varius sit amet mattis.{" "}
            </p>
          </div>

          <div className="d-flex align-items-start gap-lg-3 gap-1 mmmmm">
            <a href="https://www.instagram.com/rainbowrattlers/">
              <img src={ig} alt="" />
            </a>

            <a href="https://x.com/rarestuff11">
              <img src={x} alt="" />
            </a>

            <a href="https://web.facebook.com/profile.php?id=61555027054871">
              <img src={fb} alt="" />
            </a>

            <a href="https://www.pinterest.com/pin/604678687502715386/">
              {" "}
              <img src={pin} alt="" />
            </a>
          </div>
        </div>

        <div className="foot-two d-flex flex-column align-items-start">
          <h5 className="mb-0">My account</h5>

          <div className="d-flex flex-column align-items-start gap-lg-3 gap-1">
            <p className="mb-0">Track my order</p>
            <p className="mb-0">Terms of use</p>
            <Link to="/faq">
              {" "}
              <p className="mb-0">FAQs</p>
            </Link>
            <p className="mb-0">Submit Your feedback</p>
          </div>
        </div>

        <div className="foot-three d-flex flex-column align-items-start">
          <h5 className="mb-0">Customer sevice</h5>

          <div className="d-flex flex-column align-items-start gap-lg-3 gap-1">
            <p className="mb-0">Monday to Friday</p>
            <p className="mb-0">10am - 6pm( NewYork time)</p>
            <p className="mb-0">
              Call us: <span>123-456-7868</span>
            </p>
            <p className="mb-0">
              Email us: <span>info@example.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
