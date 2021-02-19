import React from "react";
import Rating from "../Rating";
import moment from "moment";
import Legends from "../Legends";
import { useAppDispatcher } from "../../context/appContext";
import { actionTypes } from "../../store/reducer";

function TileElement({ day, posts }) {
  const dayPosts = [];
  const dispatch = useAppDispatcher();

  posts.forEach((post) => {
    if (day.raw === moment(post.calendardatetime).format("YYYY-MM-DD")) {
      dayPosts.push(post);
    }
  });

  const handleOnClick = () => {
    console.log(dayPosts);
    if (!dayPosts.length) return;
    dispatch(actionTypes.setDayPosts(dayPosts));
    dispatch(actionTypes.setDayPostsVisibility(true));
  };

  const dayPost = dayPosts[0];
  return (
    <>
      <p>{day.date}</p>
      <div className="image-container">
        {dayPost && day.thisMonth && (
          <div>
            <Rating rating={dayPost.rating} />
            <img
              className="image"
              src={dayPost.media[0]?.mediaurl}
              onClick={handleOnClick}
            />
            <div className="legends-container">
              {dayPost.typeofday.map((type) => (
                <Legends key={type} typeOfDay={type} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TileElement;
