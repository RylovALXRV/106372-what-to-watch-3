import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PlayerControls from "./player-controls.jsx";

const mockStore = configureStore([]);

it(`Should PlayerControls render correctly`, () => {
  const store = mockStore({
    progress: 5,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <PlayerControls
          progress={5}
          duration={10}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
