import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          alt="{video.snippet.title}"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
