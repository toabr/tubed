import React, { Component } from 'react';
// import data
import { getPlaylist } from '../data/yt_api'
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

    if (pageToken != undefined) {
      this.setState({isLoading:true});
      getPlaylist({ playlistId, maxResult, pageToken }, (response) => {
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

    const renderPage = (videos) => videos.map( video => (
      <div key={video.id} className={this.props.videoStyles}>
        <VideoView video={video} />
      </div>
    ));

    return (
      <div style={{minHeight: '120px'}} >
        {this.props.render(pages,this.getNextPage)}
        <div style={{
          position: 'absolute',
          bottom: 0,
          background: 'transparent',
          fontSize: '35px',
          textAlign: 'right',
          height: '100px',
          width: '50%',
          paddingTop: '28px'
        }}>
          {this.state.isLoading &&
            <i className="fa fa-spinner fa-pulse" ></i>
          }
        </div>
      </div>
    );
  }
}
