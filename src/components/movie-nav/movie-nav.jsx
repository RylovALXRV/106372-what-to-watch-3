import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import {MOVIE_NAV_LINKS} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const MovieNav = ({card, movieNavLinkIndex, onMovieNavClick}) => {
  const MovieNavLink = [Overview, Details, Reviews];
  const Component = MovieNavLink[movieNavLinkIndex];

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {MOVIE_NAV_LINKS.map((movieNavLink, i) => (
            <li
              className={`movie-nav__item ${i === movieNavLinkIndex ? `movie-nav__item--active` : ``}`}
              key={movieNavLink}
            >
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onMovieNavClick(i);
                }}
              >{movieNavLink}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Component movie={card} />
    </Fragment>
  );
};

MovieNav.propTypes = {
  card: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
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
  movieNavLinkIndex: PropTypes.number.isRequired,
  onMovieNavClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieNavLinkIndex: state.movieNavLinkIndex,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieNavClick(index) {
    dispatch(ActionCreator.changeMovieNav(index));
  }
});

export {MovieNav};
export default connect(mapStateToProps, mapDispatchToProps)(MovieNav);
