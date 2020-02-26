import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({title, poster, preview, isPlaying, onMovieCardClick,
  onMovieCardMouseEnter, onMovieCardMouseLeave}) => {

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onMovieCardMouseEnter}
      onMouseLeave={onMovieCardMouseLeave}
    >
      <div className="small-movie-card__image"
        onClick={onMovieCardClick}>
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
            onMovieCardClick();
          }}
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
