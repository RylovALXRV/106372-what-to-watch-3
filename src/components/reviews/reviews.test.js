import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

const mock = {
  director: `David Yates`,
  starring: [`Rami Malek`, `Jon Finch`, `Cate Blanchett`],
  duration: `1h 30m`,
  genre: `drama`,
  year: `2018`,
  reviews: [{
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `December 20, 2016`,
  }],
  descriptions: `In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`,
  rating: 8.0,
};

it(`Should Reviews render correctly`, () => {
  const tree = renderer.create(
      <Reviews
        movie={mock}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
