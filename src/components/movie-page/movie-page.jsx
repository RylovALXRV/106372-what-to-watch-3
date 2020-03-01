import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieNav from "../movie-nav/movie-nav.jsx";
import {MovieCardIndex} from "../../const";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Movies from "../movies/movies.jsx";

const filterByGenre = (movies, currentMovieGenre, startIndex, endIndex) => {
  return movies.filter((movie) => {
    return movie.genre === currentMovieGenre;
  }).slice(startIndex, endIndex);
};

const MoviePage = ({card, movies, onMovieCardClick}) => {
  const {title, poster, genre, year, director, starring, duration, reviews, descriptions, rating} = card;

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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}`} alt={title} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieNav
                director={director}
                starring={starring}
                duration={duration}
                genre={genre}
                year={year}
                reviews={reviews}
                descriptions={descriptions}
                rating={rating}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <Movies
              movies={filterByGenre(movies, genre, MovieCardIndex.START, MovieCardIndex.END)}
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
    year: PropTypes.string.isRequired,
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
    descriptions: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
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
  onMovieCardClick: PropTypes.func,
};

export default MoviePage;
