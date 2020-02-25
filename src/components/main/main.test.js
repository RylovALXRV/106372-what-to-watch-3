import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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
  GENRES: [`fantasy`, `drama`, `military`, `drama`, `drama`, `horror`, `thriller`,
    `action`],
  YEARS: [`2018`, `2019`, `1971`, `2004`, `2011`, `2015`, `2015`, `2003`],
};

const generateFilms = () => {
  return filmFeature.TITLES.map((title, i) => {
    return {
      title,
      poster: filmFeature.POSTERS[i],
      genre: filmFeature.GENRES[i],
      year: filmFeature.YEARS[i],
      preview: ``,
    };
  });
};

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        title={MovieCard.TITLE}
        genre={MovieCard.GENRE}
        year={MovieCard.YEAR}
        movies={generateFilms()}
        onMovieCardAnchorClick={() => {}}
        onMovieCardImageClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
