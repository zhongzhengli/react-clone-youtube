import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBDovlEjiUN5o661K-y_ce0PuQwAo7tNmU';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));