import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({title, poster, genre, year, onMovieCardAnchorClick,
  onMovieCardImageClick, onMovieCardMouseEnter, onMovieCardMouseLeave}) => {
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieCardMouseEnter(title);
      }}
      onMouseLeave={() => {
        onMovieCardMouseLeave(null);
      }}
    >
      <div className="small-movie-card__image"
        onClick={() => {
          onMovieCardImageClick({title, poster, genre, year});
        }}>
        <img src={`img/${poster}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onMovieCardAnchorClick({title, poster, genre, year});
          }}
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired,
  onMovieCardImageClick: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
