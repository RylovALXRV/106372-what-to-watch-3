import React from "react";
import PropTypes from "prop-types";

const formatDate = (currentDate) => {
  const date = new Date(currentDate);

  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${date.getFullYear()}-${month}-${day}`;
};

const Review = ({text, rating, author, date}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={formatDate(date)}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Review;
