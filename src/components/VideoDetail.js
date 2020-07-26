import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    const { video } = this.props;
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
