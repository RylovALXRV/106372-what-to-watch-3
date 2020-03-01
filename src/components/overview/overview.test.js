import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview.jsx";

const mock = {
  descriptions: [`In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`],
  rating: 8.0,
  director: `David Yates`,
  starring: [`Rami Malek`, `Jon Finch`, `Cate Blanchett`],
};

it(`Should Overview render correctly`, () => {
  const {descriptions, rating, director, starring} = mock;
  const tree = renderer.create(
      <Overview
        rating={rating}
        descriptions={descriptions}
        starring={starring}
        director={director}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
