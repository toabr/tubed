import { Component } from 'react';
import PropTypes from 'prop-types';
// youtube api handler
import ytApi from '../data/yt_api'

// only channel-id needed
export default class ChannelData extends Component {
  state = {
    channels: []
  };

  setData(data) {
    return data.items.map(item => ({
      id: item.id,
      title: item.snippet.title,
      url: 'https://www.youtube.com/channel/' + item.id,
      thumbnails: item.snippet.thumbnails,
      subscriberCount: item.statistics.subscriberCount,
      viewCount: item.statistics.viewCount,
      videoCount: item.statistics.videoCount,
      uploads: item.contentDetails.relatedPlaylists.uploads
    }));
  }

  componentDidMount() {
    // console.log('channelData:', this.props.id);
    if(this.props.id.length > 0) {
      ytApi('channels', { id:this.props.id },(data) => {
        this.setState({ channels: this.setData(data) });
      });
    }
  }

  render() {
    return this.props.render(this.state.channels);
  }
}

ChannelData.propTypes = {
  id: PropTypes.arrayOf(PropTypes.string).isRequired
}
