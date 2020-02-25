import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_START_SETTIMEOUT = 1000;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timerId = null;

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
      progress: 0,
    };
  }

  componentDidMount() {
    console.log(this.state.isPlaying);
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

    clearTimeout(this._timerId);

    this._timerId = null;
  }

  render() {
    return (
      <video ref={this._videoRef} width="280" height="175" />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timerId = setTimeout(() => video.play(), VIDEO_START_SETTIMEOUT);
    }
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
