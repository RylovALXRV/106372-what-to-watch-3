import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MovieCardFeature = {
  TITLE: `Johnny English`,
  POSTER: `johnny-english.jpg`,
  PREVIEW: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        preview={MovieCardFeature.PREVIEW}
        isPlaying={true}
        onMovieCardClick={() => {}}
        onMovieCardMouseEnter={() => {}}
        onMovieCardMouseLeave={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
