import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../public/image 2.png";
import blueTop from "../../../public/Union.png";
import delivery from "../../../public/Free Shipping.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import Search from "../Search/Search";

const Navbar = () => {
  // State to control the left-side (hamburger) menu and the login dropdown
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  return (
    <nav>
      {/* ================= Desktop Top Banner ================= */}
      <div className="d-none d-xl-block">
        <img className="w-100" src={blueTop} alt="navbar top" />
        <div className="position-absolute d-flex align-items-center justify-content-between container-xxl top-banner-wrapper">
          <div className="d-flex align-items-center gap-2 top-banner-left">
            <img src={delivery} alt="Delivery" className="top-banner-icon" />
            <p className="mb-0 text-light top-banner-text">
              Free shipping with over $150
            </p>
          </div>
          <div className="d-flex align-items-center gap-5 top-banner-right">
            <Link
              to="/login"
              className="text-decoration-none text-light top-banner-link"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-decoration-none text-light top-banner-link"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Desktop Navbar ================= */}
      <div className="d-none d-xl-flex main-nav container align-items-center justify-content-center my-3">
        <Link to="/">
          <img src={navLogo} alt="Logo" className="nav-logo" />
        </Link>
        <div className="d-flex gap-5 align-items-center nav-links">
          <Link
            to="/"
            className="text-decoration-none p-2 fw-bold text-dark nav-link"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-decoration-none p-2 fw-bold text-dark nav-link"
          >
            Shop
          </Link>
          <Link
            to="/likes"
            className="text-decoration-none p-2 fw-bold text-dark nav-link"
          >
            Likes
          </Link>
          <Link
            to="/blog"
            className="text-decoration-none p-2 fw-bold text-dark nav-link"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-decoration-none p-2 fw-bold text-dark nav-link"
          >
            Contact
          </Link>
        </div>
        <div className="nav-search">
          <Search />
        </div>
      </div>

      {/* ================= Mobile/Tablet Navbar ================= */}
      <div className="d-flex d-xl-none mobile-navbar container align-items-center justify-content-between">
        {/* Left: Hamburger icon */}
        <button
          className="hamburger-btn border-0"
          onClick={() => setHamburgerOpen(true)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Center: Logo (scaled down) */}
        <Link to="/">
          <img src={navLogo} alt="Logo" className="nav-logo-mobile" />
        </Link>

        {/* Right: Login/Register dropdown trigger */}
        <button
          className="login-btn border-0"
          onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
        >
          <span className="login-icon">
            {/* Inline SVG for a user icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* ================= Hamburger (Main Nav) Dropdown ================= */}
      {hamburgerOpen && (
        <div className="hamburger-menu">
          <button
            className="close-btn border-0"
            onClick={() => setHamburgerOpen(false)}
          >
            &times;
          </button>
          <ul className="hamburger-menu-list">
            <li>
              <Link to="/" onClick={() => setHamburgerOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setHamburgerOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/likes" onClick={() => setHamburgerOpen(false)}>
                Likes
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setHamburgerOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setHamburgerOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* ================= Login/Register Dropdown (Mobile) ================= */}
      {loginDropdownOpen && (
        <div className="login-dropdown">
          <ul className="login-dropdown-list">
            <li>
              <Link to="/login" onClick={() => setLoginDropdownOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setLoginDropdownOpen(false)}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* ================= Mobile/Tablet Search UI ================= */}
      <div className="d-xl-none mobile-search container">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
