import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const movieCardAnchorHandler = () => {};

const App = ({title, genre, year, movieTitles}) => {
  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      movieTitles={movieTitles}
      onMovieCardAnchorClick={movieCardAnchorHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movieTitles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
