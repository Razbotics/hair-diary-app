import React from "react";
import Rating from "../Rating";
import moment from "moment";
import Legends from "../Legends";

function TileElement({ day, posts }) {
  const dayPost = posts.find(
    (post) => day.raw === moment(post.calendardatetime).format("YYYY-MM-DD")
  );

  return (
    <>
      <p>{day.date}</p>
      <div className="image-container">
        {dayPost && day.thisMonth && (
          <div>
            <Rating rating={dayPost.rating} />
            <img className="image" src={dayPost.media[0]?.mediaurl} />
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
