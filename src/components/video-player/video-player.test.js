import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mock = {
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isPlaying: true,
  isPause: true,
};

it(`Should VideoPlayer render correctly`, () => {
  const {preview, poster, isPlaying, isPause} = mock;

  const tree = renderer.create(
      <VideoPlayer
        preview={preview}
        poster={poster}
        isPlaying={isPlaying}
        isPause={isPause}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
