export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterByGenre = (films, genre) => {
  return films.filter((movie) => {
    return movie.genre === genre;
  });
};
