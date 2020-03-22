import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import VideoPlayer from "./video-player.jsx";

const mock = {
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isPlaying: true,
  isPause: true,
  isFullScreen: false,
};

const mockStore = configureStore([]);

it(`Should VideoPlayer render correctly`, () => {
  const {preview, poster, isPlaying, isPause, isFullScreen} = mock;
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <VideoPlayer
          preview={preview}
          poster={poster}
          isPlaying={isPlaying}
          isPause={isPause}
          isFullScreen={isFullScreen}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
