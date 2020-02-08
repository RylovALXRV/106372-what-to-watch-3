import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({movieTitle, onMovieCardAnchorClick}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          alt={movieTitle} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onMovieCardAnchorClick}
        >{movieTitle}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired
};

export default MovieCard;
