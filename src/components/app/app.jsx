import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import Player from "../player/player.jsx";
import withPlayer from "../../hocs/with-player.jsx";

const PlayerWrapped = withPlayer(Player);

const App = ({promoMovie, movies, onMovieCardClick, currentCard, isPlayerVisible, currentMovie}) => {
  const renderMovieScreen = () => {
    if (!currentCard && !isPlayerVisible) {
      return (
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onMovieCardClick={(movie) => onMovieCardClick(movie)}
        />
      );
    }

    if (isPlayerVisible) {
      return (
        <PlayerWrapped
          movie={currentMovie}
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
  promoMovie: PropTypes.exact({
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
  }).isRequired,
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
  currentCard: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  isPlayerVisible: PropTypes.bool.isRequired,
  currentMovie: PropTypes.object,
};

App.defaultProps = {
  currentMovie: null,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentCard: state.currentCard,
  promoMovie: state.promoMovie,
  isPlayerVisible: state.isPlayerVisible,
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movie) {
    dispatch(ActionCreator.changeCurrentCard(movie));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
