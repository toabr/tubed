import React from 'react';

import Channel from './channel';
import Playlist from './playlist';

export default function ChannelList(props) {
  return (
    <div className="channel-list">
      <ul className="list-group list-group-flush">
        {props.channels.map(channel => (
          <li className="category list-group-item" key={channel.id}>
            <Channel channelId={channel.id} {...props} />
            <Playlist
              playlistId={'UU' + channel.id.slice(2)}
              maxResult="4"
              render={(pages,getNextPage) => (
                <div className="row">
                  {pages}
                </div>
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
