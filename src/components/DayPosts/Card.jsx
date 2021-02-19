import React from "react";
import { currDate, currMonthName } from "../../libs/dateUtils";
import moment from "moment";
import Legends from "../Legends";
import Rating from "../Rating";

function Card({ post, type }) {
  const momentDate = moment(post.calendardatetime);
  const date = currDate(momentDate);
  const month = currMonthName(momentDate);
  const cardClass = "card card-" + type;
  return (
    <div className={cardClass}>
      <div className="card__image-container">
        <img src={post.media[0]?.mediaurl} />
      </div>
      <div className="card__info">
        <div className="card__legends">
          {post.typeofday.map((type) => (
            <Legends key={type} size="big" typeOfDay={type} />
          ))}
        </div>
        <div className="card__rating">
          <Rating rating={post.rating} size="big" />
        </div>
      </div>
      <div className="card__content">
        <h2>
          {date} {month}
        </h2>
        <p>{post.text.slice(0, 150) + "..."}</p>
      </div>
    </div>
  );
}

export default Card;
