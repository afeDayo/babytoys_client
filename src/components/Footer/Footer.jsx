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
      <div className="inn-footer text-start d-md-flex align-items-md-start position-absolute">
        <div className="foot-one d-flex flex-md-column">
          <div className="d-md-flex flex-md-column align-items-md-start gap-3">
            <Link>
              <img src={footlogo} alt="" />
            </Link>
            <p className="m-0">
              Nunc consequat interdum varius sit amet mattis.{" "}
            </p>
          </div>

          <div className="d-md-flex align-items-md-start gap-md-3">
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

        <div className="foot-two d-md-flex flex-md-column align-items-md-start">
          <h5 className="mb-0">My account</h5>

          <div className="d-md-flex flex-md-column align-items-md-start gap-md-3">
            <p>Track my order</p>
            <p>Terms of use</p>
            <p>Wishlist</p>
            <p>Submit Your feedback</p>
          </div>
        </div>

        <div className="foot-three d-md-flex flex-md-column align-items-md-start">
          <h5 className="mb-0">Customer sevice</h5>

          <div className="d-md-flex flex-md-column align-items-md-start gap-md-3">
            <p>Monday to Friday</p>
            <p>10am - 6pm( NewYork time)</p>
            <p>
              Call us: <span>123-456-7868</span>
            </p>
            <p>
              Email us: <span>info@example.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
