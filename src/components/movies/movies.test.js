import React from "react";
import renderer from "react-test-renderer";
import Movies from "./movies";

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

it(`Should Movies render correctly`, () => {
  const tree = renderer.create(
      <Movies
        movies={generateFilms()}
        onMovieCardAnchorClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
