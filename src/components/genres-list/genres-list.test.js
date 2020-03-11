import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

it(`Should GenreList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        onGenreLinkClick={() => {}}
        currentGenre={`All genres`}
        genres={[`All genres`, `Drama`, `Thriller`]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
