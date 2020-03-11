import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const mock = {
  title: `title`,
  poster: `poster.jpg`,
  genre: `thriller`,
  year: `2000`,
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should MovieCard button be pressed`, () => {
  const {title, poster} = mock;

  const onMovieCardClick = jest.fn();
  const onMovieCardMouseEnter = jest.fn();
  const onMovieCardMouseLeave = jest.fn();

  const movieCard = shallow(
      <MovieCard
        title={title}
        poster={poster}
        preview={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
        isPlaying={false}
        onMovieCardClick={onMovieCardClick}
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

  expect(onMovieCardClick).toHaveBeenCalledTimes(2);
});
