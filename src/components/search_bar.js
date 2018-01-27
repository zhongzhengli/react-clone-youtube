// import { Component } from 'react';
class SearchBar extends React.Component {
    // this is still a function, JS is weird
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;