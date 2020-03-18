import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
      isPause: props.isPause,
      progress: 0,
    };
  }

  componentDidMount() {
    const {preview, poster, isMuted = true} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.poster = `img/${poster}`;
    video.muted = isMuted;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.ontimeupdate = () => this.setState({
      progress: Math.floor(video.currentTime),
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      if (!this.props.isPause) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.ontimeupdate = null;
    video.src = ``;
    video.poster = ``;
    video.muted = ``;
  }

  render() {
    const {className = ``} = this.props;

    return (
      <video ref={this._videoRef} className={className} width="280" height="175" />
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  className: PropTypes.string,
  isMuted: PropTypes.bool,
  isPause: PropTypes.bool.isRequired,
};
