import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

it(`Should GenreList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        onGenreLinkClick={() => {}}
        currentGenre={`All genres`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
