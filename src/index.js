import React from "react";
import reactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

const MovieCard = {
  TITLE: `The Professor and the Madman`,
  GENRE: `thriller`,
  YEAR: 2019
};

reactDOM.render(
    <App
      title={MovieCard.TITLE}
      genre={MovieCard.GENRE}
      year={MovieCard.YEAR}
      movies={films}
    />,
    document.querySelector(`#root`)
);
