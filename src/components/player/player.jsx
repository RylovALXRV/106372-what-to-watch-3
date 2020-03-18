import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

const Player = ({onButtonExitClick, onButtonPlayClick, onButtonFullScreenClick, movie, isPause, isLoading, isFullScreen}) => {
  const {preview, poster, title} = movie;

  return (
    <div className="player">
      <VideoPlayer
        preview={preview}
        poster={poster}
        isPlaying={isLoading}
        className={isFullScreen ? `player__video` : ``}
        isMuted={false}
        isPause={isPause}
      />

      <button
        type="button"
        className="player__exit"
        onClick={onButtonExitClick}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

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
            onClick={onButtonFullScreenClick}
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
  }).isRequired,
  onButtonExitClick: PropTypes.func.isRequired,
  isPause: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  onButtonPlayClick: PropTypes.func.isRequired,
  onButtonFullScreenClick: PropTypes.func.isRequired,
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
