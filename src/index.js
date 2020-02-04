import React from "react";
import reactDOM from "react-dom";
import App from "./components/app/app.jsx";

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
    />,
    document.querySelector(`#root`)
);
