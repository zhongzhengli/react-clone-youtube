import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBDovlEjiUN5o661K-y_ce0PuQwAo7tNmU';

/**
 *  render main page
 */
class App extends React.Component {
  /**
   * init state and youtube videos
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('ukulele');
  }

  videoSearch(term) {
    ytSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  /**
   * @return {null}
   */
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={
            (selectedVideo) => this.setState({selectedVideo})
          }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
