import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const movieCard = {
  title: ``,
  poster: ``,
  genre: ``,
  year: ``,
};

it(`Should MoviePage render correctly`, () => {
  const tree = renderer.create(
      <MoviePage
        card={movieCard}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
