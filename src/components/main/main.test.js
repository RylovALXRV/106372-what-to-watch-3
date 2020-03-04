import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const MovieCard = {
  TITLE: `Moon`,
  GENRE: `Crime`,
  YEAR: 2009
};

const mock = [
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `drama`,
    year: `2019`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    director: `Bryan Singer`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`],
    duration: `2h 15m`,
    reviews: [{
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and↵      here and there, gruesome and/or heartbreaking.`,
      rating: 8.0,
      author: `Kate Muir`,
      date: `March 15, 2019`
    }],
    descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
    rating: 8.0,
  }
];

const mockStore = configureStore([]);

it(`Should Main render correctly`, () => {
  const store = mockStore({
    currentGenre: `All`,
    activeGenreLinkId: 2,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          title={MovieCard.TITLE}
          genre={MovieCard.GENRE}
          year={MovieCard.YEAR}
          movies={mock}
          onMovieCardClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
