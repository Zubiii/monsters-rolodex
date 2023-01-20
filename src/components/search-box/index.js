import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChnageHandler, placeholder } = this.props
    return (
      <input
        className="monster-searchBox"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChnageHandler}
      />
    );
  }
}

export default SearchBox
