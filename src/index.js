import React from "react";
import reactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const MovieCard = {
  TITLE: `The Professor and the Madman`,
  GENRE: `thriller`,
  YEAR: 2019
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

reactDOM.render(
    <Provider store={store}>
      <App
        title={MovieCard.TITLE}
        genre={MovieCard.GENRE}
        year={MovieCard.YEAR}
      />
    </Provider>,
    document.querySelector(`#root`)
);
