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
  GENRES: [`fantasy`, `drama`, `military`, `drama`, `drama`, `horror`, `thriller`,
    `action`],
  YEARS: [`2018`, `2019`, `1971`, `2004`, `2011`, `2015`, `2015`, `2003`],
  PREVIEW: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const generateFilms = () => {
  return filmFeature.TITLES.map((title, i) => {
    return {
      title,
      poster: filmFeature.POSTERS[i],
      genre: filmFeature.GENRES[i],
      year: filmFeature.YEARS[i],
      preview: filmFeature.PREVIEW,
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
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
