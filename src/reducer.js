import {extend} from "./utils";
import movies from "./mocks/movies";

const DEFAULT_GENRE = `All`;

const initialState = {
  movies,
  currentGenre: DEFAULT_GENRE,
  activeGenreLinkId: 0,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_ACTIVE_GENRE_LINK: `CHANGE_ACTIVE_GENRE_LINK`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
};

const filterByGenre = (genre) => {
  return movies.filter((movie) => {
    return movie.genre === genre;
  });
};

const ActionCreator = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };
  },

  changeActiveGenreLink: (index) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE_LINK,
    payload: index,
  }),

  filterMovies: (genre) => {
    return {
      type: ActionType.FILTER_BY_GENRE,
      payload: filterByGenre(genre),
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.FILTER_BY_GENRE:
      const newFilms = action.payload;

      if (state.currentGenre === DEFAULT_GENRE) {
        return extend({}, initialState);
      }

      return extend(state, {
        movies: newFilms,
      });
    case ActionType.CHANGE_ACTIVE_GENRE_LINK:
      return extend(state, {
        activeGenreLinkId: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
