import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MovieCard from "./movie-card.jsx";

const MovieCardFeature = {
  TITLE: `Johnny English`,
  POSTER: `johnny-english.jpg`,
  PREVIEW: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const mockStore = configureStore([]);

it(`Should MovieCard render correctly`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <MovieCard
          title={MovieCardFeature.TITLE}
          poster={MovieCardFeature.POSTER}
          preview={MovieCardFeature.PREVIEW}
          isPlaying={true}
          onMovieCardClick={() => {}}
          onMovieCardMouseEnter={() => {}}
          onMovieCardMouseLeave={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
