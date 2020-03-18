import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePage from "./movie-page.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

configure({
  adapter: new Adapter()
});

const movieCard = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  year: 2018,
  director: `Bryan Singer`,
  starring: [`Eddie Redmayne`, `Katherine Waterston`],
  duration: 70,
  reviews: [{
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and↵      here and there, gruesome and/or heartbreaking.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `March 15, 2019`
  }],
  descriptions: `In late 1823, Hugh Glass guides Captain Andrew Hen…ers through territory of the present day Dakotas.`,
  rating: 6.5,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

};

const mock = [
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `Drama`,
    year: 2019,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    director: `Bryan Singer`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`],
    duration: 70,
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

const mockStore = configureStore([]);

it(`Should MoviePage`, () => {
  const onMovieCardClick = jest.fn();

  const store = mockStore({
    currentGenre: `All genres`,
    activeGenreLinkId: 0,
    amountCards: 8,
    activeCardIndex: -1,
    movieNavLinkIndex: 0,
  });

  const moviePage = mount(
      <Provider store={store}>
        <MoviePage
          card={movieCard}
          movies={mock}
          onMovieCardClick={onMovieCardClick}
        />
      </Provider>
  );

  const movieCardAnchorElement = moviePage.find(`a.small-movie-card__link`);
  const movieCardImageElement = moviePage.find(`div.small-movie-card__image`);

  movieCardAnchorElement.simulate(`click`, {preventDefault() {}});
  movieCardImageElement.simulate(`click`);

  expect(onMovieCardClick).toHaveBeenCalledTimes(2);
});
