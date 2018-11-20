import React, {Component} from 'react';

import Channel from '../components/channel';
import Playlist from '../components/playlist';

export default class ChannelView extends Component {
  state = {
    refreshToken: false
  }

  onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      this.switchRefreshToken();
    }
  }

  switchRefreshToken = () => this.setState({refreshToken: !this.state.refreshToken});

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
    return (
      <div className="channel-view">
        <Channel channelId={this.props.match.params.id} page={this.state.page} {...this.props} />
        <Playlist
          playlistId={'UU' + this.props.match.params.id.slice(2)}
          maxResult="16"
          refresh={this.state.refreshToken}
          render={(pages) => {
            return(
              <div className="row">
                {pages}
              </div>
          )}}
        />
      </div>
    );
  }
}
