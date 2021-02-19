import React, { useEffect, useRef } from "react";
import { useAppState } from "../../context/appContext";
import TileElement from "./TileElement";

function CalendarElement({ days, current }) {
  const elemetRef = useRef();
  const { posts } = useAppState();

  useEffect(() => {
    if (!current) return;
    elemetRef.current.scrollIntoView();
  }, []);

  const getDayClass = (index, day) => {
    let className = "grid-item";
    if (index % 7 === 0) className += " shade";
    if (!day.thisMonth) className += " light";
    return className;
  };

  return (
    <div ref={elemetRef} className="grid-container">
      {days.map((day, index) => (
        <div key={index} className={getDayClass(index, day)}>
          <TileElement day={day} posts={posts} />
        </div>
      ))}
    </div>
  );
}

export default CalendarElement;
