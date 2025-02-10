import React, { useState } from "react";
import "./Photoshoots.css";
import baby1 from "../../../../assets/Images/cute-black-baby-home-with-parents.jpg";
import baby2 from "../../../../assets/Images/360_F_646022815_bchEmRaiiAJMd7pP1snPrALSGmO5su58.jpg";
import baby3 from "../../../../assets/Images/childrens-toy.jpg";
import baby4 from "../../../../assets/Images/360_F_626691700_U9LJF9kMZIYomniMToURLROI0jKPQ5oP.jpg";
import frame1 from "../../../../assets/Images/Frame 89.png";
import frame2 from "../../../../assets/Images/Frame 90.png";
import frame3 from "../../../../assets/Images/Frame 91.png";
import axios from "../../../../api/axios";

const Photoshoots = () => {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("/api/sub/newsletter", { email });

      if (response.status === 200) {
        setMessage("You have successfully subscribed to our newsletter!");
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="photo-con pt-5">
      <div className="photo-tits">
        <h2 className="mb-1">Recent photoshoots</h2>
        <p className="mb-5">Check gallery</p>
      </div>

      {/* ========================= */}

      <div className="photo-img mb-5">
        <img src={baby1} alt="" />
        <img src={baby2} alt="" />
        <img src={baby3} alt="" />
        <img src={baby4} alt="" />
      </div>

      {/* ========================= */}

      <div className="benefits pt-4 d-flex align-items-center justify-content-center mb-5">
        <img src={frame1} alt="" />
        <img src={frame2} alt="" />
        <img src={frame3} alt="" />
      </div>

      {/* ========================= */}

      <div className="newslet pt-5 mb-5 pb-3 position-relative">
        <div className="news-tits mb-4">
          <h2>Newsletter</h2>
          <p>
            Get 15% off your first purchase! Plus, be the first to know about
            sales, new product launches, and exclusive offers!
          </p>
        </div>

        <div className="news-in d-flex align-items-center justify-content-center">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Join</button>
        </div>

        {message && <p className="news-msg position-absolute">{message}</p>}
      </div>
    </div>
  );
};

export default Photoshoots;
