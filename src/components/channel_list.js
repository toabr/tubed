import React from 'react';

import Channel from './channel';
import Playlist from './playlist';
import Btn from './channel_btn';

export default function ChannelList(props) {
  return (
    <ul className="list-group mb-3">
      {props.channels.map(channel => (
        <li key={channel.id} className="list-group-item">
          <Channel channelId={channel.id} {...props} />
          <Playlist
            playlistId={'UU' + channel.id.slice(2)}
            maxResult="4"
            videoStyles="col-xs-12 col-sm-6 col-md-3 mt-3"
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
