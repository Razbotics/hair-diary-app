import React from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

function Rating({ rating, size = "small" }) {
  const rates = [false, false, false, false, false];
  for (let i = 0; i < rating; i++) rates[i] = true;

  return (
    <div className="rating-container">
      {rates.map((rated, index) => {
        return rated ? (
          <FaStar key={index} className={"rate-icon gold-icon" + " " + size} />
        ) : (
          <FaStar key={index} className={"rate-icon gray-icon" + " " + size} />
        );
      })}
    </div>
  );
}

export default Rating;
