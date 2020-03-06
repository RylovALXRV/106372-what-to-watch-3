import React from "react";
import renderer from "react-test-renderer";
import {MovieNav} from "./movie-nav.jsx";

const mock = {
  director: `David Yates`,
  starring: [`Rami Malek`, `Jon Finch`, `Cate Blanchett`],
  duration: `1h 30m`,
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

describe(`Render MovieNav`, () => {
  it(`Render MovieNav with Overview`, () => {
    const tree = renderer.create(
        <MovieNav
          card={mock}
          onMovieNavClick={() => {}}
          movieNavLinkIndex={0}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieNav with Details`, () => {
    const tree = renderer.create(
        <MovieNav
          card={mock}
          onMovieNavClick={() => {}}
          movieNavLinkIndex={1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieNav with Reviews`, () => {
    const tree = renderer.create(
        <MovieNav
          card={mock}
          onMovieNavClick={() => {}}
          movieNavLinkIndex={2}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
