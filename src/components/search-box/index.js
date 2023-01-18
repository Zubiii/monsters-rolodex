import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChnageHandler, placeholder } = this.props
    return (
      <input
        type="search"
        placeholder={placeholder}
        onChange={onSearchChnageHandler}
      />
    );
  }
}

export default SearchBox
