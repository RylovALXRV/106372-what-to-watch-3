import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MOVIE_TITLE = `Johnny English`;

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        movieTitle={MOVIE_TITLE}
        onMovieCardAnchorClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
