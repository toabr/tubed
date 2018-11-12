import React from 'react';

import Channel from './channel';
import Playlist from './playlist';

export default function ChannelList(props) {
  return (
    <ul className="channel-list">
      {props.channels.map(channel => (
        <li key={channel.id}>
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
  );
}
