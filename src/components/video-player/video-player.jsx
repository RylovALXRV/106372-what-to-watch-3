import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timerId = null;

    this.state = {
      isLoading: props.isPlaying,
      isPlaying: props.isPlaying,
      progress: 0,
    };
  }

  componentDidMount() {
    const {preview, poster} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.poster = `img/${poster}`;
    video.muted = true;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.ontimeupdate = null;
    video.src = ``;
    video.poster = ``;
    video.muted = false;
    this._timerId = null;

    clearTimeout(this._timerId);
  }

  render() {
    return (
      <video ref={this._videoRef} width="280" height="175" />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    this._timerId = setTimeout(() => video.play(), 1000);
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
