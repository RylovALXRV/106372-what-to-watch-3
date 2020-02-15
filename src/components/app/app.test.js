import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const MovieCard = {
  TITLE: `Moon`,
  GENRE: `fantasy`,
  YEAR: 2009
};

const filmFeature = {
  TITLES: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`,
    `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`,
    `Revenant`, `Johnny English`],
  POSTERS: [`fantastic-beasts-the-crimes-of-grindelwald.jpg`, `bohemian-rhapsody.jpg`,
    `macbeth.jpg`, `aviator.jpg`, `we-need-to-talk-about-kevin.jpg`, `what-we-do-in-the-shadows.jpg`,
    `revenant.jpg`, `johnny-english.jpg`],
};

const generateFilms = () => {
  return filmFeature.TITLES.map((title, i) => {
    return {
      title,
      poster: filmFeature.POSTERS[i],
    };
  });
};

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        title={MovieCard.TITLE}
        genre={MovieCard.GENRE}
        year={MovieCard.YEAR}
        movies={generateFilms()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
