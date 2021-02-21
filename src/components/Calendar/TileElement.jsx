import React from "react";
import Rating from "../Rating";
import moment from "moment";
import Legends from "../Legends";
import { useAppDispatcher } from "../../context/appContext";
import { actionTypes } from "../../store/reducer";

function TileElement({ day, posts }) {
  const dispatch = useAppDispatcher();
  const dayPostIndex = posts.findIndex(
    (post) => day.raw === moment(post.calendardatetime).format("YYYY-MM-DD")
  );
  const dayPost = posts[dayPostIndex];

  const handleOnClick = () => {
    console.log(dayPost);
    dispatch(actionTypes.setDayPostIndex(dayPostIndex));
    dispatch(actionTypes.setDayPostsVisibility(true));
  };

  return (
    <>
      <p>{day.date}</p>
      <div className="image-container">
        {dayPost && day.thisMonth && (
          <div>
            <Rating rating={dayPost.rating} />
            <img
              className="image"
              src={dayPost?.media[0]?.mediaurl}
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
