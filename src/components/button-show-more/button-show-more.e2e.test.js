import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonShowMore from "./button-show-more.jsx";

configure({
  adapter: new Adapter(),
});

it(`Should ButtonShowMore button be pressed`, () => {
  const onButtonClick = jest.fn();

  const buttonShowMore = shallow(
      <ButtonShowMore
        onButtonClick={onButtonClick}
      />
  );

  const buttonShowMoreElement = buttonShowMore.find(`button.catalog__button`);

  buttonShowMoreElement.simulate(`click`);

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
