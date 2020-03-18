import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieNav} from "./movie-nav.jsx";

configure({
  adapter: new Adapter(),
});

const mock = {
  director: `David Yates`,
  starring: [`Rami Malek`, `Jon Finch`, `Cate Blanchett`],
  duration: 65,
  genre: `drama`,
  year: 2018,
  reviews: [{
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `December 20, 2016`,
  }],
  descriptions: `In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`,
  rating: 8.0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const MOVIE_NAV_LINK_INDEX = 2;

it(`Should MovieNav button be pressed`, () => {
  const onMovieNavClick = jest.fn();

  const movieNav = shallow(
      <MovieNav
        card={mock}
        onMovieNavClick={onMovieNavClick}
        movieNavLinkIndex={MOVIE_NAV_LINK_INDEX}
      />
  );

  const movieNavLinkElement = movieNav.find(`a.movie-nav__link`).at(MOVIE_NAV_LINK_INDEX);

  movieNavLinkElement.simulate(`click`, {preventDefault() {}});

  expect(onMovieNavClick).toHaveBeenCalledTimes(1);
  expect(onMovieNavClick).toHaveBeenCalledWith(MOVIE_NAV_LINK_INDEX);
});
