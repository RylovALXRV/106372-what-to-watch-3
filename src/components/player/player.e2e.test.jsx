import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./player.jsx";

configure({
  adapter: new Adapter(),
});

const mock = {
  movie: {
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `fantastic-beasts-the-crimes-of-grindelwald`,
    duration: 25,
  },
  isPlaying: true,
  isPause: true,
  isFullScreen: false,
};

it(`Should Player button be pressed`, () => {
  const {movie, isPlaying, isPause, isFullScreen} = mock;

  const onButtonExitClick = jest.fn();
  const onButtonPlayClick = jest.fn();
  const onButtonFullScreenClick = jest.fn();

  const player = shallow(
      <Player
        movie={movie}
        isFullScreen={isFullScreen}
        onButtonFullScreenClick={onButtonFullScreenClick}
        onButtonPlayClick={onButtonPlayClick}
        isPause={isPause}
        isPlaying={isPlaying}
        onButtonExitClick={onButtonExitClick}
      />
  );

  const playerPlayElement = player.find(`button.player__play`);
  const playerFullScreenElement = player.find(`button.player__full-screen`);
  const playerExitElement = player.find(`button.player__exit`);

  playerPlayElement.simulate(`click`);
  playerFullScreenElement.simulate(`click`);
  playerExitElement.simulate(`click`);

  expect(onButtonPlayClick).toHaveBeenCalledTimes(1);
  expect(onButtonFullScreenClick).toHaveBeenCalledTimes(1);
  expect(onButtonExitClick).toHaveBeenCalledTimes(1);
});
