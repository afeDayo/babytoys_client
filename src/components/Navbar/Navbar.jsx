import React from "react";
import navLogo from "../../assets/Images/image 2.png";
import blueTop from "../../assets/Images/Union.png";
import delivery from "../../assets/Images/Free Shipping.png";
import navCart from "../../assets/Images/CartMajor.png";
import navSearch from "../../assets/Images/navsearch.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="position-relative">
        <img className="w-100" src={blueTop} alt="navbar top" />
        <div className="position-absolute d-md-flex loreg w-md-100 justify-content-md-between container-xxl align-items-md-center start-0 end-0 top-0 mt-md-2 px-xxl-5 px-md-5">
          <div className="d-md-flex align-items-md-center gap-md-2">
            <img src={delivery} alt="" />
            <p className="mb-0 text-light">Free free shipping with over $150</p>
          </div>

          <div className="d-md-flex align-items-md-center gap-md-5">
            <Link
              to="login"
              className="text-decoration-none text-light"
              href="#"
            >
              Login{" "}
            </Link>
            <Link
              to="/register"
              className="text-decoration-none text-light"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================== */}

      <div className="main-nav d-flex align-items-center justify-content-center my-3">
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>

        <div className="d-flex gap-5 align-items-center">
          <Link
            to="/"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Shop
          </Link>
          <Link
            to="/product"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Pages
          </Link>
          <Link
            to="/blog"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Contact
          </Link>
        </div>

        <div className="d-flex align-items-center gap-5">
          <img src={navCart} alt="" />
          <div className="position-relative">
            <input className="navinput" type="text" placeholder="Search" />
            <img className="position-absolute end-0" src={navSearch} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
