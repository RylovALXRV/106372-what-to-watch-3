import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      card: false,
    };
  }

  _setStateForMovie(movie) {
    this.setState({
      card: movie,
    });
  }

  _renderMovieScreen() {
    const {title, genre, year, movies} = this.props;
    const {card} = this.state;

    if (!card) {
      return (
        <Main
          title={title}
          genre={genre}
          year={year}
          movies={movies}
          onMovieCardAnchorClick={(movie) => this._setStateForMovie(movie)}
          onMovieCardImageClick={(movie) => this._setStateForMovie(movie)}
        />
      );
    }

    if (card) {
      return (
        <MoviePage
          card={card}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMovieScreen()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage card={this.props.movies[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
