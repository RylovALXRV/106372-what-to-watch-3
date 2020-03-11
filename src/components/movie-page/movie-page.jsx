import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieNav from "../movie-nav/movie-nav.jsx";
import {MovieCardIndex} from "../../const";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieCardDescription from "../movie-card-description/movie-card-description.jsx";
import Movies from "../movies/movies.jsx";
import {filterByGenre} from "../../utils";

const MoviePage = ({card, movies, onMovieCardClick}) => {
  const {title, poster, genre, year} = card;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${poster}`} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <MovieCardDescription
              year={year}
              genre={genre}
              title={title}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}`} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieNav card={card} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <Movies
              movies={filterByGenre(movies, genre).slice(MovieCardIndex.START, MovieCardIndex.END)}
              onMovieCardClick={onMovieCardClick}
            />
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
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
  onMovieCardClick: PropTypes.func,
};

export default MoviePage;
