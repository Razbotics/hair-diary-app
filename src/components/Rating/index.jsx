import React from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

function Rating({ rating }) {
  const rates = [false, false, false, false, false];
  for (let i = 0; i < rating; i++) rates[i] = true;

  return (
    <div className="rating-container">
      {rates.map((rated, index) => {
        return rated ? (
          <FaStar key={index} className="rate-icon gold-icon" />
        ) : (
          <FaStar key={index} className="rate-icon gray-icon" />
        );
      })}
    </div>
  );
}

export default Rating;
