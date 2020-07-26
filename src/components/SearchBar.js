import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChanged = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChanged}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
