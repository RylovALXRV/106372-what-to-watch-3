import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({title, poster, onMovieCardAnchorClick}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${poster}`}
          alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onMovieCardAnchorClick}
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired
};

export default MovieCard;
