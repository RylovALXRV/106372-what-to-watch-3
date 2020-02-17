import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class Movies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  _setStateForMovie(state) {
    this.setState({
      activeCard: state,
    });
  }

  render() {
    const {movies, onMovieCardAnchorClick, onMovieCardImageClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map(({title: movieTitle, poster, genre, year}) => (
          <MovieCard
            title={movieTitle}
            poster={poster}
            genre={genre}
            year={year}
            onMovieCardAnchorClick={onMovieCardAnchorClick}
            onMovieCardImageClick={onMovieCardImageClick}
            onMovieCardMouseEnter={(movieCardTitle) => this._setStateForMovie(movieCardTitle)}
            onMovieCardMouseLeave={(startState) => this._setStateForMovie(startState)}
            key={movieTitle}
          />
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired,
  onMovieCardImageClick: PropTypes.func.isRequired,
};

export default Movies;
