import React from "react";
import PropTypes from "prop-types";

const Details = ({movie}) => {
  const {director, starring, duration, genre, year} = movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.join(`, \n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{duration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  movie: PropTypes.exact({
    descriptions: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    duration: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.exact({
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          author: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Details;
