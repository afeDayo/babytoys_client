import React from "react";
import "./Collections.css";
import { useNavigate } from "react-router-dom";
import play from "../../../../../public/Isolation_Mode.png";
import control from "../../../../../public/Isolation_car.png";
import education from "../../../../../public/Isolation_ABC.png";
import eco from "../../../../../public/Isolation_Horse.png";
import stuffed from "../../../../../public/Isolation_teddy.png";

const Collections = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className="catego container my-3 d-flex flex-column">
      <div className="ftpt">
        <h2 className="mb-0">Find the Perfect Toy</h2>
        <p className="mb-0">Our Collections</p>
      </div>

      {/* ======================== */}

      <div className="all-catego d-flex align-items-center justify-content-between">
        <div
          className="gory"
          onClick={() => handleCategoryClick("Playsets")}
          role="button"
        >
          <img className="mb-lg-3 mb-0" src={play} alt="Playsets" />
          <p className="mb-0">Playsets</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Control Toys")}
          role="button"
        >
          <img src={control} alt="Control Toys" />
          <p className="mb-0">Control Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Educational Toys")}
          role="button"
        >
          <img
            className="mb-lg-3 mb-0"
            src={education}
            alt="Educational Toys"
          />
          <p className="mb-0">Educational Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Eco-Friendly Toys")}
          role="button"
        >
          <img src={eco} alt="Eco-Friendly Toys" />
          <p className="mb-0">Eco-Friendly Toys</p>
        </div>

        <div
          className="gory"
          onClick={() => handleCategoryClick("Stuffed Toys")}
          role="button"
        >
          <img className="mb-lg-3 mb-0" src={stuffed} alt="Stuffed Toys" />
          <p className="mb-0">Stuffed Toys</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
