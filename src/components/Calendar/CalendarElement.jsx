import React from "react";

function CalendarElement({ days }) {
  const getDayClass = (index, day) => {
    let className = "grid-item";
    if (index % 7 === 0) className += " shade";
    if (!day.thisMonth) className += " light";
    return className;
  };

  return (
    <div className="grid-container">
      {days.map((day, index) => (
        <div key={index} className={getDayClass(index, day)}>
          {day.date}
        </div>
      ))}
    </div>
  );
}

export default CalendarElement;
