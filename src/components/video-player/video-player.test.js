import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mock = {
  preview: ``,
  poster: ``,
  isPlaying: false,
};

it(`Should VideoPlayer render correctly`, () => {
  const {preview, poster, isPlaying} = mock;

  const tree = renderer.create(
      <VideoPlayer
        preview={preview}
        poster={poster}
        isPlaying={isPlaying}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
