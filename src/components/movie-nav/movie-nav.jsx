import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";

const MovieNavLink = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const MOVIE_NAV_LINKS = [
  MovieNavLink.OVERVIEW,
  MovieNavLink.DETAILS,
  MovieNavLink.REVIEWS,
];

class MovieNav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeNavLinkId: 0,
    };
  }

  _renderMovieDescription(index) {
    const {director, starring, duration, genre, year, reviews, descriptions, rating} = this.props;
    switch (index) {
      case 0:
        return (
          <Overview
            descriptions={descriptions}
            rating={rating}
            director={director}
            starring={starring}
          />
        );
      case 1:
        return (
          <Details
            director={director}
            starring={starring}
            duration={duration}
            genre={genre}
            year={year}
          />
        );
      case 2:
        return (
          <Reviews
            reviews={reviews}
          />
        );
    }

    return (
      <h2>Ошибка, нет такой вкладки</h2>
    );
  }

  render() {
    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {MOVIE_NAV_LINKS.map((movieNavLink, i) => (
              <li
                className={`movie-nav__item ${i === this.state.activeNavLinkId ? `movie-nav__item--active` : ``}`}
                key={movieNavLink}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.setState({
                      activeNavLinkId: i,
                    });
                  }}
                >{movieNavLink}</a>
              </li>
            ))}
          </ul>
        </nav>
        {this._renderMovieDescription(this.state.activeNavLinkId)}
      </Fragment>
    );
  }
}

MovieNav.propTypes = {
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
  descriptions: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieNav;
