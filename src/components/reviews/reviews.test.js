import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

const reviews = [
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `December 20, 2016`,
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `December 20, 2016`,
  }
];

it(`Should Reviews render correctly`, () => {
  const tree = renderer.create(
      <Reviews
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
