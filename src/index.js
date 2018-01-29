import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBDovlEjiUN5o661K-y_ce0PuQwAo7tNmU';

/**
 *  render main page
 */
class App extends ReactDOM.Component {
    /**
     * init state and youtube videos
     * @param {*} props
     */
    constructor(props) {
        super(props);

        this.state = {videos: []};

        ytSearch({key: YOUTUBE_API_KEY, term: 'a'}, (videos) => {
            this.setState({videos});
        });
    }
    /**
     * @return {null}
     */
    render() {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
