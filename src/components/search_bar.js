// import { Component } from 'react';

/**
 * Search bar for app
 */
class SearchBar extends React.Component {
  /**
   * set default state term as ''
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  // this is still a function, JS is weird
  /**
   * render the page
   * @return {NULL}
   */
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
