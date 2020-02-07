import React from "react";
import reactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieCard = {
  TITLE: `The Professor and the Madman`,
  GENRE: `thriller`,
  YEAR: 2019
};

const MOVIE_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`,
  `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`,
  `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`,
  `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

reactDOM.render(
    <App
      title={MovieCard.TITLE}
      genre={MovieCard.GENRE}
      year={MovieCard.YEAR}
      movieTitles={MOVIE_TITLES}
    />,
    document.querySelector(`#root`)
);
