import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Movies from "../movies/movies.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieCardDescription from "../movie-card-description/movie-card-description.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ButtonShowMore from "../button-show-more/button-show-more.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const Main = ({promoMovie, movies, amountCards, onMovieCardClick, onButtonClick, onMovieButtonPlayClick}) => {
  const {title, genre, year, poster} = promoMovie;

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`img/${poster}`} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={`img/${poster}`} alt={title} width="218" height="327" />
            </div>

            <MovieCardDescription
              year={year}
              genre={genre}
              title={title}
              onMovieButtonPlayClick={() => {
                onMovieButtonPlayClick(promoMovie);
              }}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <Movies
            movies={movies}
            onMovieCardClick={onMovieCardClick}
          />

          {amountCards < movies.length ?
            <div className="catalog__more">
              <ButtonShowMore
                onButtonClick={onButtonClick}
              />
            </div> : ``
          }
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  amountCards: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onMovieButtonPlayClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  amountCards: state.amountCards,
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(ActionCreator.changeAmountCards());
  },

  onMovieButtonPlayClick(movie) {
    dispatch(ActionCreator.addCurrentMovie(movie));
    dispatch(ActionCreator.addPlayer());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
