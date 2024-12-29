import React from "react";
import navCart from "../../assets/Images/CartMajor.png";
import navSearch from "../../assets/Images/navsearch.png";

const Search = () => {
  return (
    <div className="d-flex align-items-center gap-5">
      <img src={navCart} alt="" />
      <div className="position-relative">
        <input className="navinput" type="text" placeholder="Search" />
        <img className="position-absolute end-0" src={navSearch} alt="" />
      </div>
    </div>
  );
};

export default Search;
