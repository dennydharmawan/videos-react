import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtube from "./apis/youtube";

const KEY = "AIzaSyBA8XhgJGO6oHaVp2HJY8B4ddzS4ktgycM";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        {this.state.selectedVideo && (
          <VideoDetail video={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
