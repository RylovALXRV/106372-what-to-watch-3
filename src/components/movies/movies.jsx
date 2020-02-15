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

  render() {
    const {movies, onMovieCardAnchorClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map(({title: movieTitle, poster}) => (
          <MovieCard
            title={movieTitle}
            poster={poster}
            onMovieCardAnchorClick={onMovieCardAnchorClick}
            onMovieCardMouseEnter={() => {
              this.setState({
                activeCard: movieTitle,
              });
            }}
            onMovieCardMouseLeave={() => {
              this.setState({
                activeCard: null,
              });
            }}
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
        poster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired,
};

export default Movies;