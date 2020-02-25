import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({title, poster, genre, year, preview, onMovieCardAnchorClick,
  onMovieCardImageClick, onMovieCardMouseEnter, onMovieCardMouseLeave, isPlaying}) => {

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieCardMouseEnter(title)}
      onMouseLeave={() => onMovieCardMouseLeave(null)}
    >
      <div className="small-movie-card__image"
        onClick={() => {
          onMovieCardImageClick({title, poster, genre, year});
        }}>
        {isPlaying ?
          <VideoPlayer
            isPlaying={isPlaying}
            preview={preview}
            title={title}
            poster={poster}
          /> :
          <img src={`img/${poster}`} alt={title} width="280" height="175" />
        }
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
