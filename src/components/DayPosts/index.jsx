import React, { useState } from "react";
import { useAppDispatcher, useAppState } from "../../context/appContext";
import Card from "./Card";
import { FaTimes } from "react-icons/fa";
import "./DayPosts.css";
import { actionTypes } from "../../store/reducer";
import { useSwipeable } from "react-swipeable";

function DayPosts() {
  const { dayPosts, dayPostsVisible } = useAppState();
  const [currentCard, setCurrentCard] = useState(0);
  const dispatch = useAppDispatcher();

  const handleOnSwipe = (event) => {
    if (event.dir === "Left") {
      const index = currentCard + 1;
      if (index >= dayPosts.length) return;
      setCurrentCard(index);
    } else {
      const index = currentCard - 1;
      if (index < 0) return;
      setCurrentCard(index);
    }
  };

  const handlers = useSwipeable({
    onSwiped: handleOnSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleOnClick = () => {
    dispatch(actionTypes.setDayPostsVisibility(false));
  };

  const getCardType = (index) => {
    if (dayPosts.length === 1 || currentCard === index) return "current";
    else if (currentCard + 1 === index) return "right";
    else if (currentCard - 1 === index) return "left";
    else return "hidden";
  };

  return dayPostsVisible ? (
    <div className="daypost-container" {...handlers}>
      {dayPosts.map((post, index) => (
        <Card key={post.id} post={post} type={getCardType(index)} />
      ))}
      <div className="btn-container">
        <div className="close-btn" onClick={handleOnClick}>
          <FaTimes size={30} />
        </div>
      </div>
    </div>
  ) : null;
}

export default DayPosts;
