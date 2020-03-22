import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        isPause: true,
        isFullScreen: false,
      };
    }

    _toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    render() {
      const {isPause, isPlaying, isFullScreen} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isPause={isPause}
          isFullScreen={isFullScreen}
          onButtonPlayClick={() => {
            this.setState({
              isPause: !isPause,
            });
          }}
          onButtonFullScreenClick={() => {
            this._toggleFullScreen();
            this.setState({
              isFullScreen: !isFullScreen
            });
          }}
        />
      );
    }
  }

  WithPlayer.propTypes = {
    movie: PropTypes.shape({
      preview: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithPlayer;
};

export default withPlayer;
