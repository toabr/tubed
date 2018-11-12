import React, { Component } from 'react';
// import data
import ytApi from '../data/yt_api'
// import components
import VideoView from './video_view';
import VideoData from './video_data';

export default class Playlist extends Component {
  state = {
    isLoading: true,
    pages: [{
      nextPageToken: '',
      ids: []
    }]
  }

  getNextPage = () => {
    const playlistId = this.props.playlistId;
    const maxResult = (this.props.maxResult) ? this.props.maxResult : 3;
    const pageToken = this.state.pages[this.state.pages.length-1].nextPageToken;

    console.log('Playlist - next page', pageToken);

    if (pageToken !== undefined) {
      this.setState({isLoading:true});
      ytApi('playlistItems', { playlistId, maxResult, pageToken }, (response) => {
        let pages = this.state.pages;
        pages.push({
          nextPageToken: response.nextPageToken,
          ids: response.items.map(video => video.contentDetails.videoId)
        });
        this.setState({pages});
        this.setState({isLoading:false});
      });
    }
  }

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      this.getNextPage();
    }
  }

  componentDidMount() {
    this.getNextPage();
  }

  render() {
    let pages = this.state.pages.map((page,i) => (
      <VideoData
      key={i}
      ids={page.ids}
      render={videos => renderPage(videos)}
      />
    ));

    const renderPage = videos => videos.map( video => <VideoView key={video.id} video={video} /> );

    return (
      <div className="playlist">
        {this.props.render(pages,this.getNextPage)}
        <div className="loader">
          {this.state.isLoading &&
            <i className="fa fa-spinner fa-pulse" ></i>
          }
        </div>
      </div>
    );
  }
}
