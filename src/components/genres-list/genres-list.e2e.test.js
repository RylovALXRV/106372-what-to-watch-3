import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list.jsx";

configure({
  adapter: new Adapter()
});

it(`Should GenresList button be pressed`, () => {
  const onGenreLinkClick = jest.fn();

  const genresList = shallow(
      <GenresList
        onGenreLinkClick={onGenreLinkClick}
        currentGenre={`Drama`}
        genres={[`All genres`, `Drama`, `Thriller`]}
      />
  );

  const genresListLinkElement = genresList.find(`a.catalog__genres-link`).at(1);

  genresListLinkElement.simulate(`click`, {preventDefault() {}});

  expect(onGenreLinkClick).toHaveBeenCalledTimes(1);
  expect(onGenreLinkClick).toHaveBeenCalledWith(`Drama`);
});
