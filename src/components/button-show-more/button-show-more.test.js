import React from "react";
import renderer from "react-test-renderer";
import ButtonShowMore from "./button-show-more.jsx";

it(`Render ButtonShowMore`, () => {
  const tree = renderer.create(
      <ButtonShowMore
        onButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
