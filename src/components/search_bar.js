// import { Component } from 'react';
class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term : ''};
    }

    // this is still a function, JS is weird
    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term : event.target.value })} />
                
                Value of the state: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;