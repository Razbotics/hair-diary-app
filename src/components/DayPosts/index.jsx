import React, { useEffect, useState } from "react";
import { useAppDispatcher, useAppState } from "../../context/appContext";
import Card from "./Card";
import { FaTimes } from "react-icons/fa";
import { actionTypes } from "../../store/reducer";
import { useSwipeable } from "react-swipeable";
import "./DayPosts.css";

function DayPosts() {
  const { posts, dayPostIndex, dayPostsVisible } = useAppState();
  const [currentCard, setCurrentCard] = useState(null);
  const dispatch = useAppDispatcher();

  useEffect(() => {
    setCurrentCard(dayPostIndex);
  }, [dayPostIndex]);

  const getCycleIndex = (index) => {
    if (index >= posts.length) return index - posts.length;
    else if (index < 0) return index + posts.length;
    else return index;
  };

  const handleOnSwipe = (event) => {
    let index;
    if (event.dir === "Left") {
      index = getCycleIndex(currentCard + 1);
    } else if (event.dir === "Right") {
      index = getCycleIndex(currentCard - 1);
    }
    setCurrentCard(index);
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
    let type;
    if (currentCard === index) type = "current";
    else if (getCycleIndex(currentCard + 1) === index) type = "right";
    else if (getCycleIndex(currentCard + 2) === index) type = "right-two";
    else if (getCycleIndex(currentCard - 1) === index) type = "left";
    else if (getCycleIndex(currentCard - 2) === index) type = "left-two";
    else type = "hidden";
    return type;
  };

  return dayPostsVisible ? (
    <div className="daypost-container" {...handlers}>
      {posts.map((post, index) => (
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
