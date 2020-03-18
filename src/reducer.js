import {extend} from "./utils";
import movies, {generateGenresList} from "./mocks/movies";
import {DEFAULT_GENRE, MovieCardIndex} from "./const";
import {filterByGenre} from "./utils";

const initialState = {
  activeCardIndex: -1,
  amountCards: MovieCardIndex.DEFAULT,
  currentGenre: DEFAULT_GENRE,
  currentCard: false,
  genres: generateGenresList(),
  movieNavLinkIndex: 0,
  promoMovie: movies[0],
  player: false,
  currentMovie: {},
  movies,
};

const ActionType = {
  CHANGE_ACTIVE_CARD_INDEX: `CHANGE_ACTIVE_CARD_INDEX`,
  CHANGE_AMOUNT_CARDS: `CHANGE_AMOUNT_CARDS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_MOVIE_NAV: `CHANGE_MOVIE_NAV`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  CHANGE_CURRENT_CARD: `CHANGE_CURRENT_CARD`,
  ADD_PLAYER: `ADD_PLAYER`,
  ADD_CURRENT_MOVIE: `ADD_CURRENT_MOVIE`,
  REMOVE_PLAYER: `REMOVE_PLAYER`,
};

const ActionCreator = {
  changeActiveCardIndex: (index) => {
    return {
      type: ActionType.CHANGE_ACTIVE_CARD_INDEX,
      payload: index,
    };
  },

  changeAmountCards: () => {
    return {
      type: ActionType.CHANGE_AMOUNT_CARDS,
      payload: MovieCardIndex.DEFAULT,
    };
  },

  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };
  },

  changeMovieNav: (movieNavLinkIndex) => {
    return {
      type: ActionType.CHANGE_MOVIE_NAV,
      payload: movieNavLinkIndex,
    };
  },

  filterMovies: (genre) => {
    return {
      type: ActionType.FILTER_BY_GENRE,
      payload: filterByGenre(movies, genre),
    };
  },

  changeCurrentCard: (card) => {
    return {
      type: ActionType.CHANGE_CURRENT_CARD,
      payload: card,
    };
  },

  addPlayer: () => {
    return {
      type: ActionType.ADD_PLAYER,
      payload: true,
    };
  },

  removePlayer: () => {
    return {
      type: ActionType.REMOVE_PLAYER,
      payload: false,
    };
  },

  addCurrentMovie: (movie) => {
    return {
      type: ActionType.ADD_CURRENT_MOVIE,
      payload: movie,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        amountCards: MovieCardIndex.DEFAULT,
      });

    case ActionType.FILTER_BY_GENRE:
      const newFilms = action.payload;

      if (state.currentGenre === DEFAULT_GENRE) {
        return extend({}, initialState);
      }

      return extend(state, {
        movies: newFilms,
      });

    case ActionType.CHANGE_MOVIE_NAV:
      return extend(state, {
        movieNavLinkIndex: action.payload,
      });

    case ActionType.CHANGE_CURRENT_CARD:
      return extend(state, {
        currentCard: action.payload,
        movieNavLinkIndex: 0,
      });

    case ActionType.CHANGE_AMOUNT_CARDS:
      const amountCards = state.amountCards + action.payload;

      return extend(state, {
        amountCards,
      });

    case ActionType.CHANGE_ACTIVE_CARD_INDEX:
      return extend(state, {
        activeCardIndex: action.payload,
      });

    case ActionType.ADD_PLAYER:
      return extend(state, {
        player: action.payload,
      });

    case ActionType.ADD_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: action.payload,
      });

    case ActionType.REMOVE_PLAYER:
      return extend(state, {
        player: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, filterByGenre};
