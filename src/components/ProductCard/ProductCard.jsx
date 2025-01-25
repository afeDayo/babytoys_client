import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ topPick, poproduct }) => {
  const product = topPick || poproduct;

  const storeRatings = JSON.parse(localStorage.getItem("productRatings")) || {};

  const initialRating =
    storeRatings[product?.id] || product?.initialRating || 0;

  const [rating, setRating] = useState(initialRating);

  const [hover, setHover] = useState(null);

  const [message, setMessage] = useState("");

  const handleRating = (rate) => {
    try {
      setRating(rate);

      const updatedRatings = { ...storeRatings, [product.id]: rate };
      localStorage.setItem("productRatings", JSON.stringify(updatedRatings));

      console.log(`Rated product ${product?.name} with ${rate} stars`);
      setMessage("Thank you for rating!");
    } catch (err) {
      setMessage("Failed to submit rating.");
      console.error("Rating Error:", err);
    }
  };

  useEffect(() => {
    const upToDateRatings =
      JSON.parse(localStorage.getItem("productRatings")) || {};

    if (upToDateRatings[product?.id]) {
      setRating(upToDateRatings[product.id]);
    }
  }, [product?.id]);

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
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductCard;
