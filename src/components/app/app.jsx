import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const App = ({title, genre, year, movies, onMovieCardClick, currentCard}) => {
  const renderMovieScreen = () => {
    if (!currentCard) {
      return (
        <Main
          title={title}
          genre={genre}
          year={year}
          movies={movies}
          onMovieCardClick={(movie) => onMovieCardClick(movie)}
        />
      );
    }

    return (
      <MoviePage
        card={currentCard}
        movies={movies}
        onMovieCardClick={(movie) => onMovieCardClick(movie)}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderMovieScreen()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage
            card={movies[0]}
            movies={movies}
            onMovieCardClick={() => {}}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
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
        duration: PropTypes.string.isRequired,
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
  currentCard: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentCard: state.currentCard,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movie) {
    dispatch(ActionCreator.changeCurrentCard(movie));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
