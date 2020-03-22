const MovieCardIndex = {
  DEFAULT: 8,
  START: 0,
  END: 4,
};

const MovieNavLink = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const MOVIE_NAV_LINKS = [
  MovieNavLink.OVERVIEW,
  MovieNavLink.DETAILS,
  MovieNavLink.REVIEWS,
];

const DEFAULT_GENRE = `All genres`;
const HUNDRED_PERCENT = 100;
const SECONDS = 60;
const VIDEO_START_SETTIMEOUT = 1000;
const PLAYER_VIDEO_CLASSNAME = `player__video`;

export {MovieCardIndex, MOVIE_NAV_LINKS, MovieNavLink, DEFAULT_GENRE, VIDEO_START_SETTIMEOUT, SECONDS, HUNDRED_PERCENT,
  PLAYER_VIDEO_CLASSNAME};
