import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {DEFAULT_GENRE} from "../../const";
import movies from "../../mocks/movies";

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

it(`Should Main render correctly`, () => {
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

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoMovie={promoMovie}
          movies={mock}
          onMovieCardClick={() => {}}
          onMovieButtonPlayClick={() => {}}
          onButtonClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
