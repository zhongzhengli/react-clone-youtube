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
         <div>
                <input
                value={this.state.term}
                onChange={(event) => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;
