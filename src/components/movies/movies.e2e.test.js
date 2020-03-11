import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Movies} from "./movies.jsx";

configure({
  adapter: new Adapter(),
});

const mock = [
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `drama`,
    year: 2019,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    director: `Bryan Singer`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`],
    duration: `2h 15m`,
    reviews: [{
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and↵      here and there, gruesome and/or heartbreaking.`,
      rating: 8.0,
      author: `Kate Muir`,
      date: `March 15, 2019`
    }],
    descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
    rating: 8.0,
  }
];

it(`Should Movies`, () => {
  const onMovieCardClick = jest.fn();
  const onMovieCardMouse = jest.fn();

  const movies = mount(
      <Movies
        movies={mock}
        activeCardIndex={-1}
        amountCards={8}
        onMovieCardClick={onMovieCardClick}
        onMovieCardMouse={onMovieCardMouse}
      />
  );

  const movieCardAnchorElement = movies.find(`a.small-movie-card__link`).at(0);
  const movieCardImageElement = movies.find(`div.small-movie-card__image`).at(0);

  movieCardAnchorElement.simulate(`click`, {preventDefault() {}});
  movieCardImageElement.simulate(`click`);
  movies.simulate(`mouseenter`);
  movies.simulate(`mouseleave`, {preventDefault() {}});

  expect(onMovieCardClick).toHaveBeenCalledTimes(2);
  expect(onMovieCardClick).toHaveBeenCalledWith(mock[0]);
});
