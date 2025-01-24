import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./TopPicks.css";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const topPicks = {
  featured: [
    {
      id: 1,
      name: "Dollhouse Furniture Set",
      image: "../../../../../src/assets/Images/toy1.png",
      price: "₦64,000",
      initialRating: 0,
    },

    {
      id: 2,
      name: "Remote Control Police Car",
      image: "../../../../../src/assets/Images/toy2.png",
      price: "₦48,000",
      initialRating: 0,
    },

    {
      id: 3,
      name: "Abacus Counting Frame",
      image: "../../../../../src/assets/Images/toy3.png",
      price: "₦14,000",
      initialRating: 0,
    },

    {
      id: 4,
      name: "Natural Rubber Teething Ring",
      image: "../../../../../src/assets/Images/toy4.png",
      price: "₦13,000",
      initialRating: 0,
    },

    {
      id: 5,
      name: "Stuffed Monkey Toy",
      image: "../../../../../src/assets/Images/toy5.png",
      price: "₦17,100",
      initialRating: 0,
    },

    {
      id: 6,
      name: "Viking Ship Playset",
      image: "../../../../../src/assets/Images/toy6.png",
      price: "₦89,600",
      initialRating: 0,
    },

    {
      id: 7,
      name: "RC Bulldozer",
      image: "../../../../../src/assets/Images/toy7.png",
      price: "₦66,000",
      initialRating: 0,
    },

    {
      id: 8,
      name: "Puzzle Map of Nigeria",
      image: "../../../../../src/assets/Images/toy8.png",
      price: "₦25,000",
      initialRating: 0,
    },
  ],

  bestSellers: [
    {
      id: 9,
      name: "Recycled Paper Coloring Book",
      image: "../../../../../src/assets/Images/toy9.png",
      price: "₦2,500",
      initialRating: 0,
    },

    {
      id: 10,
      name: "Cuddly Bear with Heart",
      image: "../../../../../src/assets/Images/toy10.png",
      price: "₦19,200",
      initialRating: 0,
    },

    {
      id: 11,
      name: "Space Explorer Playset",
      image: "../../../../../src/assets/Images/toy11.png",
      price: "₦67,200",
      initialRating: 0,
    },

    {
      id: 12,
      name: "RC Quad Bike",
      image: "../../../../../src/assets/Images/toy12.png",
      price: "₦24,500",
      initialRating: 0,
    },

    {
      id: 13,
      name: "Learning Laptop Toy",
      image: "../../../../../src/assets/Images/toy13.png",
      price: "₦75,000",
      initialRating: 0,
    },

    {
      id: 14,
      name: "Eco-Friendly Drum Set",
      image: "../../../../../src/assets/Images/toy14.png",
      price: "₦22,000",
      initialRating: 0,
    },

    {
      id: 15,
      name: "Stuffed Unicorn Toy",
      image: "../../../../../src/assets/Images/toy15.png",
      price: "₦19,500",
      initialRating: 0,
    },

    {
      id: 16,
      name: "Superhero Playset",
      image: "../../../../../src/assets/Images/toy16.png",
      price: "₦40,000",
      initialRating: 0,
    },
  ],

  newArrivals: [
    {
      id: 17,
      name: "Remote Control Racing Car",
      image: "../../../../../src/assets/Images/toy17.png",
      price: "₦57,500",
      initialRating: 0,
    },

    {
      id: 18,
      name: "Alphabet Blocks",
      image: "../../../../../src/assets/Images/toy18.png",
      price: "₦13,500",
      initialRating: 0,
    },

    {
      id: 19,
      name: "Bamboo Stacking Rings",
      image: "../../../../../src/assets/Images/toy19.png",
      price: "₦13,500",
      initialRating: 0,
    },

    {
      id: 20,
      name: "Huggable Whale Plush",
      image: "../../../../../src/assets/Images/toy20.png",
      price: "₦28,600",
      initialRating: 0,
    },

    {
      id: 21,
      name: "Wooden Train Station Set",
      image: "../../../../../src/assets/Images/toy21.png",
      price: "₦156,000",
      initialRating: 0,
    },

    {
      id: 22,
      name: "RC Robot Toy",
      image: "../../../../../src/assets/Images/toy22.png",
      price: "₦62,500",
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
      id: 24,
      name: "Handcrafted Wooden Animal Set",
      image: "../../../../../src/assets/Images/toy24.png",
      price: "₦18,000",
      initialRating: 0,
    },
  ],
};

const TopPicks = () => {
  const [activePick, setActivePick] = useState("featured");

  const handlePickChange = (pick) => {
    setActivePick(pick);
  };

  return (
    <div className="caro-con d-flex mb-3 flex-column align-items-center">
      <div className="caro-but d-flex flex-column align-items-center gap-5">
        <h2>Top picks for your little ones</h2>
        <div className="carousel-buttons d-flex align-items-center">
          <button
            className={`carousel-btn ${
              activePick === "featured" ? "active" : ""
            }`}
            onClick={() => handlePickChange("featured")}
          >
            Featured
          </button>

          <button
            className={`carousel-btn ${
              activePick === "bestSellers" ? "active" : ""
            }`}
            onClick={() => handlePickChange("bestSellers")}
          >
            Best seller
          </button>

          <button
            className={`carousel-btn ${
              activePick === "newArrivals" ? "active" : ""
            }`}
            onClick={() => handlePickChange("newArrivals")}
          >
            New arrivals
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${
              activePick === "featured"
                ? "0%"
                : activePick === "bestSellers"
                ? "-100%"
                : activePick === "newArrivals"
                ? "-200%"
                : "0%"
            })`,
          }}
        >
          <div className="carousel-slide">
            {topPicks.featured.map((topPick) => (
              <div key={topPick.id} className="product-card">
                <div className="card-img position-relative d-flex align-items-center justify-content-center">
                  <img className="m-0" src={topPick.image} alt={topPick.name} />
                  <div className="love-cart position-absolute">
                    <FaRegHeart />
                    <FiShoppingCart />
                  </div>
                </div>

                <div className="loo-card d-flex flex-column align-items-start justify-content-start">
                  <div className="nam-pri d-flex flex-column align-items-start justify-content-start">
                    <h3 className="m-0">{topPick.name}</h3>
                    <p className="m-0">{topPick.price}</p>
                  </div>
                  <ProductCard key={topPick.id} topPick={topPick} />
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-slide">
            {topPicks.bestSellers.map((topPick) => (
              <div key={topPick.id} className="product-card">
                <div className="card-img position-relative d-flex align-items-center justify-content-center">
                  <img className="m-0" src={topPick.image} alt={topPick.name} />
                  <div className="love-cart position-absolute">
                    <FaRegHeart />
                    <FiShoppingCart />
                  </div>
                </div>

                <div className="loo-card d-flex flex-column align-items-start justify-content-start">
                  <div className="nam-pri d-flex flex-column align-items-start justify-content-start">
                    <h3 className="m-0">{topPick.name}</h3>
                    <p className="m-0">{topPick.price}</p>
                  </div>
                  <ProductCard key={topPick.id} topPick={topPick} />
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-slide">
            {topPicks.newArrivals.map((topPick) => (
              <div key={topPick.id} className="product-card">
                <div className="card-img position-relative d-flex align-items-center justify-content-center">
                  <img className="m-0" src={topPick.image} alt={topPick.name} />
                  <div className="love-cart position-absolute">
                    <FaRegHeart />
                    <FiShoppingCart />
                  </div>
                </div>

                <div className="loo-card d-flex flex-column align-items-start justify-content-start">
                  <div className="nam-pri d-flex flex-column align-items-start justify-content-start">
                    <h3 className="m-0">{topPick.name}</h3>
                    <p className="m-0">{topPick.price}</p>
                  </div>
                  <ProductCard key={topPick.id} topPick={topPick} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
