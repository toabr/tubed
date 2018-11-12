import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ChannelData from '../components/channel_data';
import ChannelEdit from './channel_edit';
import Btn from './channel_btn';

export default class Channel extends Component {
  state = {
    inStore: false,
    editIsOpen: false,
    channel: {}
  }

  handleAdd(channel) {
    this.props.addChannel(channel, (response) => {
      this.setChannel();
      this.setState({ editIsOpen: true });
    })
  }

  handleDelete() {
    this.props.deleteChannel(this.props.channelId, (response) => {
      console.log('response: ', response);
      this.setState({ inStore: !response, editIsOpen: false });
    })
  }

  handleEdit = () => {
    this.state.editIsOpen &&
    this.props.saveChannel(this.state.channel, (response) => {
      console.log('response ', response);
    });
    this.setState({ editIsOpen: !this.state.editIsOpen });
  }

  handleUpdate = (e) => {
    // console.log('# target -', e.target.id, ' = ', e.target.value);
    const channel = this.state.channel;
    channel[e.target.id] = e.target.value;
    this.setState({channel});
  }

  setChannel() {
    const channel = this.props.storedChannels.find(element => {
      return element.id === this.props.channelId;
    });
    if(channel) {
      this.setState({ inStore: true, channel });
    }
  }

  componentDidMount() {
    this.setChannel();
  }

  render() {
    // console.log('channel', this.state.channel);
    let actionBtn;
    if(this.state.inStore) {
      if(this.state.editIsOpen) {
        actionBtn = <Btn state="success rounded-circle" icon="save" onClick={this.handleEdit} />;
      } else {
        actionBtn = <Btn state="default rounded-circle" icon="pencil" onClick={this.handleEdit} />;
      }
    }

    const renderChannel = (channel) => (
      <div className="clearfix">

        {!this.state.inStore &&
        <Btn state="primary rounded-circle" icon="plus" onClick={() => this.handleAdd(channel)} />}

        <Link to={`/channel/${channel.id}`}>
          <img className="float-left rounded-circle m-2"
            width={channel.thumbnails.default.width/1.65}
            height={channel.thumbnails.default.height/1.65}
            src={channel.thumbnails.default.url} alt="" />
          <h2 className="text-dark" style={{display:'inline'}}>{channel.title}</h2>
        </Link><br/>

        <span>{parseInt(channel.videoCount).toLocaleString()} videos | </span>
        <span>{parseInt(channel.viewCount).toLocaleString()} views | </span>
        <span>{parseInt(channel.subscriberCount).toLocaleString()} subscribers</span>

      </div>
    );

    return (
      <div className="">
        {actionBtn}

        <ChannelData id={[this.props.channelId]} render={ channels => (
          <React.Fragment>
            {channels.length && renderChannel(channels[0])}
          </React.Fragment>
        )} />

        {this.state.inStore &&
          <ChannelEdit
            channel={this.state.channel}
            isOpen={this.state.editIsOpen}
            onDelete={() => this.handleDelete()}
            onUpdate={(e) => this.handleUpdate(e)}
          />
        }
      </div>
    );
  }
}
