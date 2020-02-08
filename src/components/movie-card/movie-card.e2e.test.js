import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const MOVIE_TITLE = ``;

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should MovieCard button be pressed`, () => {
  const onMovieCardAnchorClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movieTitle={MOVIE_TITLE}
        onMovieCardAnchorClick={onMovieCardAnchorClick}
      />
  );

  const movieCardAnchorElement = movieCard.find(`a.small-movie-card__link`);

  movieCardAnchorElement.props().onClick();

  expect(onMovieCardAnchorClick.mock.calls.length).toBe(1);
});
