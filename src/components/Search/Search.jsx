// src/components/Search/Search.jsx
import React from "react";
import { Link } from "react-router-dom";
import navCart from "../../../public/CartMajor.png";
import navSearch from "../../../public/navsearch.png";
import "./Search.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Search = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <div className="position-relative d-flex align-items-center gap-5">
      {user ? (
        <Link to="/cart">
          <img src={navCart} alt="Cart" />
        </Link>
      ) : (
        <img
          src={navCart}
          alt="Cart"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Please log in to view your cart")}
        />
      )}
      {cart?.items?.length > 0 && (
        <span className="cart-badge">
          <p className="mb-0">{cart.items.length}</p>
        </span>
      )}
      <div className="position-relative">
        <input className="navinput" type="text" placeholder="Search" />
        <img className="position-absolute end-0" src={navSearch} alt="Search" />
      </div>
    </div>
  );
};

export default Search;
