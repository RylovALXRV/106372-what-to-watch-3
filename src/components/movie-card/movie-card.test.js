import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MovieCardFeature = {
  TITLE: `Johnny English`,
  POSTER: `johnny-english.jpg`,
  GENRE: `action`,
  YEAR: `2003`,
  PREVIEW: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        title={MovieCardFeature.TITLE}
        poster={MovieCardFeature.POSTER}
        genre={MovieCardFeature.GENRE}
        year={MovieCardFeature.YEAR}
        preview={MovieCardFeature.PREVIEW}
        isPlaying={true}
        onMovieCardAnchorClick={() => {}}
        onMovieCardImageClick={() => {}}
        onMovieCardMouseEnter={() => {}}
        onMovieCardMouseLeave={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
