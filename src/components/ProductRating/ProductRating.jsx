import React, { useState } from "react";
import "./ProductRating.css";
import rateProduct from "../../api/productApi";
import { FaStar } from "react-icons/fa";

const ProductRating = ({ productId, initialRating }) => {
  const [hover, setHover] = useState(null);
  const [selectedRating, setSelectedRating] = useState(initialRating || 0);
  const [message, setMessage] = useState("");

  const handleRating = async (ratingValue) => {
    try {
      await rateProduct(productId, ratingValue);
      setSelectedRating(ratingValue);
      setMessage("Thank you for rating!");
    } catch (err) {
      setMessage("Failed to submit rating.");
      console.error("Rating Error:", err);
    }
  };

  return (
    <div className="rating-container">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <FaStar
            key={ratingValue}
            className={`stars ${
              index < (hover || selectedRating) ? "active" : ""
            }`}
            size={20}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleRating(ratingValue)}
          />
        );
      })}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductRating;
