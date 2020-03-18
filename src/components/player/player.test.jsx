import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./player.jsx";

const mock = {
  movie: {
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `fantastic-beasts-the-crimes-of-grindelwald`,
  },
  isLoading: true,
  isPause: true,
  isFullScreen: false,
};

it(`Should Player render correctly`, () => {
  const {movie, isLoading, isPause, isFullScreen} = mock;

  const tree = renderer.create(
      <Player
        movie={movie}
        isFullScreen={isFullScreen}
        onButtonFullScreenClick={() => {}}
        onButtonPlayClick={() => {}}
        isPause={isPause}
        isLoading={isLoading}
        onButtonExitClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
