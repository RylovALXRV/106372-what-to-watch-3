import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const Reviews = ({movie}) => {
  const {reviews} = movie;

  const reviewsHalf = Math.round(reviews.length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, reviewsHalf).map((review, i) => {
          const {text, rating, author, date} = review;

          return (
            <Review
              text={text}
              rating={rating}
              author={author}
              date={date}
              key={`${text}-${i}`}
            />
          );
        })}
      </div>

      <div className="movie-card__reviews-col">
        {reviews.slice(reviewsHalf).map((review, i) => {
          const {text, rating, author, date} = review;

          return (
            <Review
              text={text}
              rating={rating}
              author={author}
              date={date}
              key={`${text}-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  movie: PropTypes.exact({
    descriptions: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.exact({
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          author: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reviews;
