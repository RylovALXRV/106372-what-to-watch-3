import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import PropTypes from "prop-types";
import {generateGenresList} from "../../mocks/movies";

const GenresList = ({onGenreLinkClick, currentGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {generateGenresList().map((genre) => (
        <li
          className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}
          key={genre}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreLinkClick(genre);
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  onGenreLinkClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMovies(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
