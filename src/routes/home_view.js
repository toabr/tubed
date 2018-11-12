import React, { Component } from 'react';
// import components
import ChannelData from '../components/channel_data';

export default class HomeView extends Component {
  render() {
    // build unique category tabs
    const id = this.props.storedChannels.map(channel => channel.id);

    return (
      <div class="home-view" >
        <ChannelData id={id} render={ channels => {
          // console.log('HomeView:', channels);
          return(
            <div className="row">
              {channels.map((channel,i) => (
                <div key={i} className="channel">
                  <a href={`/channel/${channel.id}`}>
                    <img
                      src={channel.thumbnails.medium.url}
                      alt={channel.title}
                      width={channel.thumbnails.medium.width}
                      height={channel.thumbnails.medium.height}
                    />
                  </a>
                </div>
              ))}
            </div>
          );
        }} />
      </div>
    );
  }
}
