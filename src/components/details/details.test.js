import React from "react";
import renderer from "react-test-renderer";
import Details from "./details.jsx";

const mock = {
  director: `David Yates`,
  starring: [`Rami Malek`, `Jon Finch`, `Cate Blanchett`],
  duration: 90,
  genre: `drama`,
  year: 2018,
  reviews: [{
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: 8.0,
    author: `Kate Muir`,
    date: `December 20, 2016`,
  }],
  descriptions: `In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`,
  rating: 8.0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Should Details render correctly`, () => {
  const tree = renderer.create(
      <Details movie={mock} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
