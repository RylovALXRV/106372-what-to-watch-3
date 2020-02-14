import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MovieCardFeature = {
  TITLE: `Johnny English`,
  POSTER: `johnny-english.jpg`
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        onMovieCardAnchorClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
