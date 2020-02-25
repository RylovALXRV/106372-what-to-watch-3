import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const movieCardFeature = {
  title: `title`,
  poster: `poster.jpg`,
  genre: `thriller`,
  year: `2000`,
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should MovieCard button be pressed`, () => {
  const onMovieCardAnchorClick = jest.fn();
  const onMovieCardImageClick = jest.fn();
  const onMovieCardMouseEnter = jest.fn();
  const onMovieCardMouseLeave = jest.fn();

  const movieCard = shallow(
      <MovieCard
        title={movieCardFeature.title}
        poster={movieCardFeature.poster}
        genre={movieCardFeature.genre}
        year={movieCardFeature.year}
        preview={``}
        isPlaying={false}
        onMovieCardAnchorClick={onMovieCardAnchorClick}
        onMovieCardImageClick={onMovieCardImageClick}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
        onMovieCardMouseLeave={onMovieCardMouseLeave}
      />
  );

  const movieCardAnchorElement = movieCard.find(`a.small-movie-card__link`);
  const movieCardImageElement = movieCard.find(`div.small-movie-card__image`);

  movieCardAnchorElement.simulate(`click`, {preventDefault() {}});
  movieCardImageElement.simulate(`click`);
  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`, {preventDefault() {}});

  expect(onMovieCardAnchorClick).toHaveBeenCalledTimes(1);
  expect(onMovieCardImageClick).toHaveBeenCalledTimes(1);
  expect(onMovieCardImageClick).toHaveBeenCalledWith(movieCardFeature);
  expect(onMovieCardAnchorClick).toHaveBeenCalledWith(movieCardFeature);
  expect(onMovieCardMouseEnter).toHaveBeenCalledWith(movieCardFeature.title);
  expect(onMovieCardMouseLeave).toHaveBeenCalledWith(null);
});
