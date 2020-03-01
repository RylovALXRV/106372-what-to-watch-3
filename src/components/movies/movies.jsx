import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const VIDEO_START_SETTIMEOUT = 1000;

class Movies extends PureComponent {
  constructor(props) {
    super(props);

    this._timerId = null;

    this.state = {
      activeCard: null,
      activeCardIndex: -1,
    };
  }

  _setStateForMovie(state, index) {
    this.setState({
      activeCard: state,
      activeCardIndex: index,
    });
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map(({title, poster, genre, year, preview, director, starring, duration, reviews, descriptions, rating}, i) => {
          return (
            <MovieCard
              title={title}
              poster={poster}
              preview={preview}
              isPlaying={i === this.state.activeCardIndex}
              onMovieCardClick={() => {
                onMovieCardClick({title, poster, genre, year, director, starring, duration, reviews, descriptions, rating});
                clearTimeout(this._timerId);
              }}
              onMovieCardMouseEnter={() => {
                this._timerId = setTimeout(() => this._setStateForMovie(title, i), VIDEO_START_SETTIMEOUT);
              }}
              onMovieCardMouseLeave={() => {
                this._setStateForMovie(null, -1);
                clearTimeout(this._timerId);
              }}
              key={title}
            />
          );
        })}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        duration: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.exact({
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              author: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
        descriptions: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        rating: PropTypes.number.isRequired,
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default Movies;
