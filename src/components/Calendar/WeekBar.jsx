import React from "react";

function WeekBar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="week-grid-container">
      {days.map((day, index) => (
        <div key={index} className="grid-item">
          {day}
        </div>
      ))}
    </div>
  );
}

export default WeekBar;
