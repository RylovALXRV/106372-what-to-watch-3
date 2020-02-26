import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const VIDEO_START_SETTIMEOUT = 1000;

const MovieCard = ({title, poster, genre, year, preview, onMovieCardAnchorClick,
  onMovieCardImageClick, onMovieCardMouseEnter, onMovieCardMouseLeave, isPlaying}) => {
  // перенес setTimeout сюда, но работает не так как надо вроде как
  // убрал тег <img />
  // оставил только <video />, в задании не понял как правильно все-таки надо
  let timerId = null;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        timerId = setTimeout(() => onMovieCardMouseEnter(title), VIDEO_START_SETTIMEOUT);
      }}
      onMouseLeave={() => {
        onMovieCardMouseLeave(null);
        clearTimeout(timerId);
      }}
    >
      <div className="small-movie-card__image"
        onClick={() => {
          onMovieCardImageClick({title, poster, genre, year});
        }}>
        <VideoPlayer
          isPlaying={isPlaying}
          preview={preview}
          title={title}
          poster={poster}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onMovieCardAnchorClick({title, poster, genre, year});
          }}
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMovieCardAnchorClick: PropTypes.func.isRequired,
  onMovieCardImageClick: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
