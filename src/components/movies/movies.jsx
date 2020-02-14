import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const Movies = ({movies, onMovieCardAnchorClick}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map(({title: movieTitle, poster}) => (
        <MovieCard
          title={movieTitle}
          poster={poster}
          onMovieCardAnchorClick={onMovieCardAnchorClick}
          key={movieTitle}
        />
      ))}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired
};

export default Movies;
