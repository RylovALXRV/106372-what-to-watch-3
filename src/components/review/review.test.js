import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const mock = {
  text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  rating: 8.0,
  author: `Kate Muir`,
  date: `December 20, 2016`,
};

it(`Should Review render correctly`, () => {
  const {text, rating, author, date} = mock;
  const tree = renderer.create(
      <Review
        rating={rating}
        author={author}
        text={text}
        date={date}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
