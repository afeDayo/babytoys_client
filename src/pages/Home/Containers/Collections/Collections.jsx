import React from "react";
import "./Collections.css";
import { useNavigate } from "react-router-dom";
import play from "../../../../assets/Images/Isolation_Mode.png";
import control from "../../../../assets/Images/Isolation_car.png";
import education from "../../../../assets/Images/Isolation_ABC.png";
import eco from "../../../../assets/Images/Isolation_Horse.png";
import stuffed from "../../../../assets/Images/Isolation_teddy.png";

const Collections = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className="catego my-3 d-flex flex-column">
      <div className="ftpt">
        <h2>Find the Perfect Toy</h2>
        <p>Our Collections</p>
      </div>

      {/* ======================== */}

      <div className="all-catego d-flex align-items-center justify-content-between">
        <div
          className="gory"
          onClick={() => handleCategoryClick("Playsets")}
          role="button"
        >
          <img className="mb-3" src={play} alt="Playsets" />
          <p>Playsets</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Control Toys")}
          role="button"
        >
          <img src={control} alt="Control Toys" />
          <p>Control Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Educational Toys")}
          role="button"
        >
          <img className="mb-3" src={education} alt="Educational Toys" />
          <p>Educational Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Eco-Friendly Toys")}
          role="button"
        >
          <img src={eco} alt="Eco-Friendly Toys" />
          <p>Eco-Friendly Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Stuffed Toys")}
          role="button"
        >
          <img className="mb-3" src={stuffed} alt="Stuffed Toys" />
          <p>Stuffed Toys</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
