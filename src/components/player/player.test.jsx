import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Player} from "./player.jsx";

const mock = {
  movie: {
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `fantastic-beasts-the-crimes-of-grindelwald`,
    duration: 60,
  },
  isPlaying: true,
  isPause: true,
  isFullScreen: false,
};

const mockStore = configureStore([]);

it(`Should Player render correctly`, () => {
  const {movie, isPlaying, isPause, isFullScreen} = mock;
  const store = mockStore({
    progress: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Player
          movie={movie}
          isFullScreen={isFullScreen}
          onButtonFullScreenClick={() => {}}
          onButtonPlayClick={() => {}}
          isPause={isPause}
          isPlaying={isPlaying}
          onButtonExitClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
