import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import data
import { getChannel } from '../data/yt_api'

// only channel-id needed
export default class ChannelInfo extends Component {
  state = {
    channel: {}
  };

  setChannel(data) {
    // console.log('channel data: ', data);
    const channel = {
      id: data.id,
      title: data.snippet.title,
      url: 'https://www.youtube.com/channel/' + data.id,
      thumbnail: {
        url: data.snippet.thumbnails.default.url,
        width: data.snippet.thumbnails.default.width,
        height: data.snippet.thumbnails.default.height
      },
      subscriberCount: data.statistics.subscriberCount,
      viewCount: data.statistics.viewCount,
      videoCount: data.statistics.videoCount,
      uploads: data.contentDetails.relatedPlaylists.uploads
    }
    this.setState({channel});
  }

  componentDidMount() {
    getChannel({ id:this.props.id },(data) => {
      this.setChannel(data);
    });
  }

  render() {
    const channel = this.state.channel;
    if(!channel.id) {
      return null;
    }

    return (
      <div className="clearfix">
        {this.props.render(this.state.channel)}
        <Link to={`/channel/${channel.id}`}>
          <img className="float-left rounded-circle m-2"
            width={channel.thumbnail.width/1.65}
            height={channel.thumbnail.height/1.65}
            src={channel.thumbnail.url} alt="" />
          <h2 className="text-dark" style={{display:'inline'}}>{channel.title}</h2>
        </Link><br/>
        <span>{parseInt(channel.videoCount).toLocaleString()} videos | </span>
        <span>{parseInt(channel.viewCount).toLocaleString()} views | </span>
        <span>{parseInt(channel.subscriberCount).toLocaleString()} subscribers</span>
      </div>
    );
  }
}
