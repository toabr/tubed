import React, {Component} from 'react';

import Playlist from '../components/playlist';

export default class newsfeedView extends Component {
  render() {
    const ids = this.props.storedChannels.map(channel => channel.id);

    return (
      <div className="newsfeed-view">
        <div className="row">
          {ids.map(id => (
            <Playlist
              playlistId={'UU' + id.slice(2)}
              maxResult="1"
              render={(video,getNextPage) => video}
            />
          ))}
        </div>

      </div>
    );
  }
}
