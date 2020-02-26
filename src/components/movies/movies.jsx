import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class Movies extends PureComponent {
  constructor(props) {
    super(props);

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
    const {movies, onMovieCardAnchorClick, onMovieCardImageClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map(({title: movieTitle, poster, genre, year, preview}, i) => {
          return (
            <MovieCard
              title={movieTitle}
              poster={poster}
              genre={genre}
              year={year}
              preview={preview}
              isPlaying={i === this.state.activeCardIndex}
              onMovieCardAnchorClick={onMovieCardAnchorClick}
              onMovieCardImageClick={onMovieCardImageClick}
              onMovieCardMouseEnter={(movieCardTitle) => {
                this._setStateForMovie(movieCardTitle, i);
              }}
              onMovieCardMouseLeave={(startState) => {
                this._setStateForMovie(startState, -1);
              }}
              key={movieTitle}
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
      }).isRequired
  ).isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired,
  onMovieCardImageClick: PropTypes.func.isRequired,
};

export default Movies;
