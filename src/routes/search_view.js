import React, { Component } from 'react';

import ytApi from '../data/yt_api';
import ChannelList from '../components/channel_list';
import SearchForm from '../components/search_form';

export default class SearchView extends Component {
  state = {
    value: '',
    channels: []
  }

  onInputChange = (e) => {
    this.setState({value: e.target.value});
    // console.log('# query =', e.target.value);
    setTimeout(() => { this.onFormSubmit() }, 1200) }

  onFormSubmit = (e) => {
    e && e.preventDefault();
    ytApi('search', {'q':this.state.value}, (data) => {
      const channels = data.items.map((channel) => {
        return {
          id: channel.id.channelId,
          title: channel.snippet.title
        };
      });
      this.setState({channels});
    });
  }

  render() {
    return(
      <div className="search-view">
        <SearchForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} />
        <ChannelList channels={this.state.channels} {...this.props} />
      </div>
    );
  }
}
