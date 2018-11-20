import React, { Component } from 'react';
// import components
import ChannelList from '../components/channel_list';

export default class FeedView extends Component {
  render() {
    // filter channels by category
    const filteredChannels = this.props.storedChannels.filter((channel) => {
      if(this.props.match.params.id) {
        return channel.category === this.props.match.params.id
      } else {
        return true
      }
    });

    // sort filtered channels by weight
    filteredChannels.sort(function(a, b){return a.weight - b.weight});

    return (
      <div className="feed-view">
        <ChannelList channels={filteredChannels} {...this.props} />
      </div>
    );
  }
}
