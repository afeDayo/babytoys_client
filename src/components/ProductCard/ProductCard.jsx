import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ topPick, poproduct }) => {
  const product = topPick || poproduct;

  const [rating, setRating] = useState(product?.initialRating || 0);

  const [hover, setHover] = useState(null);

  const handleRating = (rate) => {
    setRating(rate);

    console.log(`Rated product ${product?.name} with ${rate} stars`);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={20}
          className={`star ${star <= (hover || rating) ? "active" : ""}`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          onClick={() => handleRating(star)}
        />
      ))}
    </div>
  );
};

export default ProductCard;
