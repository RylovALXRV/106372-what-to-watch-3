import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MovieCardFeature = {
  TITLE: `Johnny English`,
  POSTER: `johnny-english.jpg`,
  GENRE: `action`,
  YEAR: `2003`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        genre={MovieCardFeature.GENRE}
        year={MovieCardFeature.YEAR}
        onMovieCardAnchorClick={() => {}}
        onMovieCardImageClick={() => {}}
        onMovieCardMouseEnter={() => {}}
        onMovieCardMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
