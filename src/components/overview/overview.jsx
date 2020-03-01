import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Overview = ({descriptions, rating, director, starring}) => {
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {descriptions.map((description) => (
          <p
            key={description}
          >{description}</p>
        ))}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </Fragment>
  );
};

Overview.propTypes = {
  descriptions: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default Overview;
