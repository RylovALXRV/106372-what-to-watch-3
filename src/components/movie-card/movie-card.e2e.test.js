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
  const onMovieCardMouseEnter = jest.fn();
  const onMovieCardMouseLeave = jest.fn();

  const movieCard = shallow(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        onMovieCardAnchorClick={onMovieCardAnchorClick}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
        onMovieCardMouseLeave={onMovieCardMouseLeave}
      />
  );

  const movieCardAnchorElement = movieCard.find(`a.small-movie-card__link`);

  movieCardAnchorElement.simulate(`click`);
  movieCard.simulate(`mouseenter`, MovieCardFeature);
  movieCard.simulate(`mouseleave`, null);

  expect(onMovieCardAnchorClick).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseEnter).toHaveBeenCalledWith(MovieCardFeature);
  expect(onMovieCardMouseLeave).toHaveBeenCalledWith(null);
});
