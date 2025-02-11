import React from "react";
import navLogo from "../../../public/image 2.png";
import blueTop from "../../../public/Union.png";
import delivery from "../../../public/Free Shipping.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

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
            <Link to="/login" className="text-decoration-none text-light">
              Login{" "}
            </Link>
            <Link to="/register" className="text-decoration-none text-light">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================== */}

      <div className="main-nav container d-flex align-items-center justify-content-center my-3">
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
            to="/likes"
            className="text-decoration-none p-2 fw-bold text-dark"
            href=""
          >
            Likes
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

        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
