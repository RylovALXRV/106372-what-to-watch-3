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
