import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {DEFAULT_GENRE} from "../../const";
import movies from "../../mocks/movies";

configure({
  adapter: new Adapter(),
});

const promoMovie = {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  genre: `drama`,
  year: 2019,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  director: `Bryan Singer`,
  starring: [`Eddie Redmayne`, `Katherine Waterston`],
  duration: 120,
  reviews: [{
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and↵      here and there, gruesome and/or heartbreaking.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `March 15, 2019`
  }],
  descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
  rating: 8.0,
};

const mock = [
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `Drama`,
    year: 2019,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    director: `Bryan Singer`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`],
    duration: 95,
    reviews: [{
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      rating: 8.0,
      author: `Kate Muir`,
      date: `March 15, 2019`
    }],
    descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
    rating: 8.0,
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `Fantasy`,
    year: 2010,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    director: `Bryan Singer`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`],
    duration: 100,
    reviews: [{
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      rating: 8.0,
      author: `Kate Muir`,
      date: `March 15, 2019`
    }],
    descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
    rating: 8.0,
  }
];

const generateGenresList = () => {
  const genres = [DEFAULT_GENRE];

  const genresUnique = new Set(mock.map((movie) => {
    return movie.genre;
  }));

  return genres.concat(Array.from(genresUnique));
};

const mockStore = configureStore([]);

it(`Should Main button be pressed`, () => {
  const store = mockStore({
    activeCardIndex: -1,
    amountCards: 1,
    currentGenre: DEFAULT_GENRE,
    currentCard: false,
    genres: generateGenresList(),
    movieNavLinkIndex: 0,
    promoMovie: mock[0],
    isPlayerVisible: false,
    currentMovie: null,
    progress: 0,
    movies,
  });

  const onMovieCardClick = jest.fn();
  const onButtonShowMoreClick = jest.fn();
  const onMovieButtonPlayClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          onMovieCardClick={onMovieCardClick}
          onButtonClick={onButtonShowMoreClick}
          onMovieButtonPlayClick={onMovieButtonPlayClick}
          promoMovie={promoMovie}
          amountCards={1}
          movies={mock}
        />
      </Provider>
  );

  const movieCardElement = main.find(`a.small-movie-card__link`).at(0);
  const buttonShowMoreElement = main.find(`button.catalog__button`);
  const movieButtonPlayElement = main.find(`button.btn--play`);

  movieCardElement.simulate(`click`, {preventDefault() {}});
  buttonShowMoreElement.simulate(`click`);
  movieButtonPlayElement.simulate(`click`);

  expect(onMovieCardClick).toHaveBeenCalledTimes(1);
  expect(onButtonShowMoreClick).toHaveBeenCalledTimes(1);
  expect(onMovieButtonPlayClick).toHaveBeenCalledTimes(1);
  expect(onMovieCardClick).toHaveBeenCalledWith(mock[0]);
  expect(onMovieButtonPlayClick).toHaveBeenCalledWith(promoMovie);
});
