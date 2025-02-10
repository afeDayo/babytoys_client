import React, { useEffect, useState } from "react";
import "./Popular.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import play from "../../../../assets/Images/Rectangle 15.png";
import innerPlay from "../../../../assets/Images/Vector.png";
import ecofrd from "../../../../assets/Images/Rectangle 16.png";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: 4,
    name: "Natural Rubber Teething Ring",
    image: "../../../../../src/assets/Images/toy4.png",
    price: "₦13,000",
    initialRating: 0,
  },

  {
    id: 16,
    name: "Superhero Playset",
    image: "../../../../../src/assets/Images/toy16.png",
    price: "₦40,000",
    initialRating: 0,
  },

  {
    id: 23,
    name: "Shape Sorter Toy",
    image: "../../../../../src/assets/Images/toy23.png",
    price: "₦13,000",
    initialRating: 0,
  },

  {
    id: 11,
    name: "Space Explorer Playset",
    image: "../../../../../src/assets/Images/toy11.png",
    price: "₦67,200",
    initialRating: 0,
  },
];

const Popular = () => {
  return (
    <div className="popular-con container">
      <div className="d-flex align-items-center gap-3 mb-5">
        <div className="position-relative">
          <img className="position-relative" src={play} alt="" />
          <Link to="/shop" className="inner-play position-absolute">
            {" "}
            <img src={innerPlay} alt="" />
            <h2 className="play-text position-absolute">
              Discover the Joy of Play
            </h2>
          </Link>
        </div>
        <div className="position-relative">
          <img src={ecofrd} alt="" />
          <div className="eco-text text-start d-flex flex-column gap-4 align-items-start position-absolute">
            <div className="eco-frd d-flex flex-column gap-2">
              <h2 className="mb-0">Eco - Friendly Toys</h2>
              <p className="mb-0">
                Flash sale 30%, Extra discount for loyal customers
              </p>
            </div>
            <button className="border-0 py-2 px-4 rounded-5">Shop now </button>
          </div>
        </div>
      </div>

      <div className="pt-3">
        <div className="mb-5 pop-tit">
          <h2 className="m-0">Customer Loves</h2>
          <p className="m-0">Popular product</p>
        </div>

        <div className="popular-slide">
          {popularProducts.map((poproduct) => (
            <div key={poproduct.id} className="popular-card">
              <div className="popular-img position-relative d-flex align-items-center justify-content-center">
                <img
                  className="m-0"
                  src={poproduct.image}
                  alt={poproduct.name}
                />
                <div className="lovepop-cart position-absolute">
                  <FaRegHeart />
                  <FiShoppingCart />
                </div>
              </div>

              <div className="loopop-card d-flex flex-column align-items-start justify-content-start">
                <div className="nampop-pri d-flex flex-column align-items-start justify-content-start">
                  <h3 className="m-0">{poproduct.name}</h3>
                  <p className="m-0">{poproduct.price.toLocaleString()}</p>
                </div>
              </div>
              <ProductCard key={poproduct.id} poproduct={poproduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
