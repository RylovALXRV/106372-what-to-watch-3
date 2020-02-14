import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const MovieCardFeature = {
  TITLE: `title`,
  POSTER: `poster.jpg`
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should MovieCard button be pressed`, () => {
  const onMovieCardAnchorClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        onMovieCardAnchorClick={onMovieCardAnchorClick}
      />
  );

  const movieCardAnchorElement = movieCard.find(`a.small-movie-card__link`);

  movieCardAnchorElement.simulate(`click`);

  expect(onMovieCardAnchorClick.mock.calls.length).toBe(1);
});
