import React from "react";
import {GENRE_LINKS, GENRES} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import PropTypes from "prop-types";

const GenresList = ({onGenreLinkClick, activeGenreLinkId}) => {
  return (
    <ul className="catalog__genres-list">
      {GENRE_LINKS.map((genreLink, i) => (
        <li
          className={`catalog__genres-item ${i === activeGenreLinkId ? `catalog__genres-item--active` : ``}`}
          key={genreLink}
        >
          <a
            href="#"
            className="catalog__genres-link"
            data-genre={GENRES[i]}
            onClick={(evt) => {
              evt.preventDefault();
              onGenreLinkClick(evt.target.dataset.genre, i);
            }}
          >{genreLink}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  onGenreLinkClick: PropTypes.func.isRequired,
  activeGenreLinkId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentGenre: state.currentGenre,
  activeGenreLinkId: state.activeGenreLinkId,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick(genre, index) {
    dispatch(ActionCreator.changeActiveGenreLink(index));
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMovies(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
