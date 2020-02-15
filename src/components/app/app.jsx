import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({title, genre, year, movies}) => {
  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      movies={movies}
      onMovieCardAnchorClick={() => {}}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default App;
