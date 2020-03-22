import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {DEFAULT_GENRE, MovieCardIndex} from "../../const";
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

const mockStore = configureStore([]);

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
  }
];

const generateGenresList = () => {
  const genres = [DEFAULT_GENRE];

  const genresUnique = new Set(mock.map((movie) => {
    return movie.genre;
  }));

  return genres.concat(Array.from(genresUnique));
};

it(`Render App`, () => {
  const store = mockStore({
    activeCardIndex: -1,
    amountCards: MovieCardIndex.DEFAULT,
    currentGenre: DEFAULT_GENRE,
    currentCard: false,
    genres: generateGenresList(),
    movieNavLinkIndex: 0,
    promoMovie: movies[0],
    movies,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          promoMovie={promoMovie}
          movies={mock}
          onMovieCardClick={() => {}}
          isPlayerVisible={false}
          currentMovie={null}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
