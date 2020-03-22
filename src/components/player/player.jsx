import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import PlayerControls from "../player-controls/player-controls.jsx";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import {isFullScreenOpen} from "../../utils";
import {PLAYER_VIDEO_CLASSNAME} from "../../const";

const Player = ({onButtonExitClick, onButtonPlayClick, onButtonFullScreenClick, movie, isPause, isPlaying, isFullScreen}) => {
  const {preview, poster, title, duration} = movie;

  return (
    <div className="player">
      <VideoPlayer
        preview={preview}
        poster={poster}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        isMuted={false}
        isPause={isPause}
        className={PLAYER_VIDEO_CLASSNAME}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          onButtonExitClick();
          isFullScreenOpen();
        }}
      >Exit</button>

      <div className="player__controls">
        <PlayerControls
          duration={duration}
        />
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onButtonPlayClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPause ? `#play-s` : `#pause`} />
            </svg>
            <span>{isPause ? `Play` : `Pause`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {
              onButtonFullScreenClick();
              // toggleFullScreen();
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  onButtonExitClick: PropTypes.func.isRequired,
  onButtonPlayClick: PropTypes.func.isRequired,
  onButtonFullScreenClick: PropTypes.func.isRequired,
  isPause: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonExitClick() {
    dispatch(ActionCreator.removePlayer());
  }
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
