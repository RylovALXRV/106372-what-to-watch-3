import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {MovieCardIndex, VIDEO_START_SETTIMEOUT} from "../../const";

let timerId = null;

const Movies = ({movies, onMovieCardClick, onMovieCard, activeCardIndex, amountCards}) => {
  return (
    <div className="catalog__movies-list">
      {movies.slice(MovieCardIndex.START, amountCards).map((movie, i) => {
        const {title, poster, preview} = movie;

        return (
          <MovieCard
            title={title}
            poster={poster}
            preview={preview}
            isPlaying={i === activeCardIndex}
            onMovieCardClick={() => {
              onMovieCardClick(movie);
              onMovieCard(-1);
              clearTimeout(timerId);
            }}
            onMovieCardMouseEnter={() => {
              timerId = setTimeout(() => onMovieCard(i), VIDEO_START_SETTIMEOUT);
            }}
            onMovieCardMouseLeave={() => {
              onMovieCard(-1);
              clearTimeout(timerId);
            }}
            key={`${title}-${i}`}
          />
        );
      })}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        preview: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        duration: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.exact({
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              author: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
        descriptions: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCard: PropTypes.func.isRequired,
  activeCardIndex: PropTypes.number.isRequired,
  amountCards: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  activeCardIndex: state.activeCardIndex,
  amountCards: state.amountCards,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCard(index) {
    dispatch(ActionCreator.changeActiveCardIndex(index));
  },
});

export {Movies};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
