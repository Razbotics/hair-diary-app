import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import moment from "moment";
import { useAppState } from "../../context/appContext";

function CalendarElement({ days, current }) {
  const elemetRef = useRef();
  const { posts } = useAppState();

  useEffect(() => {
    if (!current) return;
    elemetRef.current.scrollIntoView();
  }, []);

  const getdayPost = useCallback(
    (day) => {
      return posts.find(
        (post) => day.raw === moment(post.calendardatetime).format("YYYY-MM-DD")
      );
    },
    [posts]
  );

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
          <p>{day.date}</p>

          <div className="image-container">
            {getdayPost(day) && day.thisMonth && (
              <img className="image" src={getdayPost(day).media[0]?.mediaurl} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarElement;
