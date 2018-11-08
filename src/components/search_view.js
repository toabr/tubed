import React, { Component } from 'react';

import { ytSearch } from '../data/yt_api';
import ChannelList from './channel_feed/channel_list';
import SearchForm from './channel_feed/search_form';

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
    ytSearch({'q':this.state.value}, (data) => {
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
      <React.Fragment>
        <SearchForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} />
        <ChannelList channels={this.state.channels} {...this.props} />
      </React.Fragment>
    );
  }
}
