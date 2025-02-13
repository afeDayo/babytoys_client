// src/components/Search/Search.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navCart from "../../../public/CartMajor.png";
import navSearch from "../../../public/navsearch.png";
import "./Search.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Search = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to /shop with a search query parameter
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="d-flex align-items-center gap-3 search-container">
      <div className="cart-icon-wrapper position-relative">
        {user ? (
          <Link to="/cart">
            <img src={navCart} alt="Cart" className="nav-cart-img" />
            {cart?.items?.length > 0 && (
              <span className="cart-badge">
                <p className="mb-0">{cart.items.length}</p>
              </span>
            )}
          </Link>
        ) : (
          <div className="position-relative">
            <img
              src={navCart}
              alt="Cart"
              className="nav-cart-img"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Please log in to view your cart")}
            />
            {cart?.items?.length > 0 && (
              <span className="cart-badge">
                <p className="mb-0">{cart.items.length}</p>
              </span>
            )}
          </div>
        )}
      </div>
      <div className="position-relative search-input-wrapper">
        <form onSubmit={handleSearchSubmit}>
          <input
            className="navinput"
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
          />
          <img className="search-icon" src={navSearch} alt="Search" />
        </form>
      </div>
    </div>
  );
};

export default Search;
