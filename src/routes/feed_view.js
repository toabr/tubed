import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import components
import ChannelList from '../components/channel_list';

export default class FeedView extends Component {
  render() {
    // build unique category tabs
    let categorys = [];
    categorys = this.props.storedChannels.map(channel => channel.category)
    .filter((item,index,arr) => arr.hasOwnProperty(item) ? false : arr[item] = true )
    .map(category => (
      <li key={category} className="nav-item">
        <NavLink className="nav-link text-muted" to={`/category/${category}`}>{category}</NavLink>
      </li>
    ));

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
        <ul className="nav nav-tabs">
          {categorys}
        </ul>
        <ChannelList channels={filteredChannels} {...this.props} />
      </div>
    );
  }
}
