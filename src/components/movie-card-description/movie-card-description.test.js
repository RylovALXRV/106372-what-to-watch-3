import React from "react";
import renderer from "react-test-renderer";
import MovieCardDescription from "./movie-card-description.jsx";

const mock = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  year: 2000,
};

it(`Should MovieCardDescription render correctly`, () => {
  const {title, genre, year} = mock;

  const tree = renderer.create(
      <MovieCardDescription
        year={year}
        genre={genre}
        title={title}
        onMovieButtonPlayClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
