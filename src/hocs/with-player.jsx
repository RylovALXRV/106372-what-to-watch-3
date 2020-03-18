import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isPause: true,
        isFullScreen: false
      };
    }

    render() {
      const {isPause, isLoading, isFullScreen} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPause={isPause}
          isFullScreen={isFullScreen}
          onButtonPlayClick={() => {
            this.setState({
              isPause: !isPause,
            });
          }}
          onButtonFullScreenClick={() => {
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
