import {HUNDRED_PERCENT, SECONDS} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterByGenre = (films, genre) => {
  return films.filter((movie) => {
    return movie.genre === genre;
  });
};

export const generateDuration = (duration) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
};

export const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const isFullScreenOpen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
};

export const setProgressValue = (progress, duration) => {
  return progress * HUNDRED_PERCENT / (duration * SECONDS);
};

export const formatTimeMovie = (duration, progress) => {
  duration = duration - (progress / SECONDS);

  let sec = SECONDS - (progress % SECONDS);
  let min = Math.floor(duration % SECONDS);
  let hour = Math.floor(duration / SECONDS);

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  sec = (sec === SECONDS) ? `00` : sec;

  return `${hour}:${min}:${sec}`;
};
