import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import {setProgressValue, formatTimeMovie} from "../../utils";

const PlayerControls = ({progress, duration}) => {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={setProgressValue(progress, duration)} max="100" />
        <div className="player__toggler" style={{left: `${setProgressValue(progress, duration)}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{formatTimeMovie(duration, progress)}</div>
    </div>
  );
};

PlayerControls.propTypes = {
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  isPlayerVisible: state.isPlayerVisible,
  progress: state.progress,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonExitClick() {
    dispatch(ActionCreator.removePlayer());
  }
});

export {PlayerControls};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls);
