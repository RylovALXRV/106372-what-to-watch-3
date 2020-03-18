import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardDescription from "./movie-card-description.jsx";

configure({
  adapter: new Adapter(),
});

const mock = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  year: 2000,
};

it(`Should MovieCardDescription be button pressed`, () => {
  const {title, genre, year} = mock;
  const onMovieButtonPlayClick = jest.fn();

  const movieCardDescription = shallow(
      <MovieCardDescription
        year={year}
        genre={genre}
        title={title}
        onMovieButtonPlayClick={onMovieButtonPlayClick}
      />
  );

  const movieCardPlayElement = movieCardDescription.find(`button.btn--play`);

  movieCardPlayElement.simulate(`click`);

  expect(onMovieButtonPlayClick).toHaveBeenCalledTimes(1);
});
