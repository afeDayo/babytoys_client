import React from "react";
import "./Header.css";
import headerImg from "../../../public/Rectangle 40.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hero position-relative">
      <img className="position-relative" src={headerImg} alt="" />
      <div className="h-text position-absolute d-md-flex flex-md-column align-items-md-start">
        <div className="t-head d-md-flex flex-md-column gap-3">
          <h1 className="m-0">Play, learn, & grow!</h1>
          <p className="m-0 pe-lg-5">
            Crafting smiles with every toy, made for learning, fun, and growth
          </p>
        </div>
        <Link to="/shop" className="text-decoration-none">
          Shop now
        </Link>
      </div>
    </header>
  );
};

export default Header;
