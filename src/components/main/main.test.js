import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const MovieCard = {
  TITLE: `Moon`,
  GENRE: `fantasy`,
  YEAR: 2009
};

const MOVIE_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`,
  `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`,
  `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`,
  `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        title={MovieCard.TITLE}
        genre={MovieCard.GENRE}
        year={MovieCard.YEAR}
        movieTitles={MOVIE_TITLES}
        onMovieCardAnchorClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
