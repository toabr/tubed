import React, { Component } from 'react';

import ChannelInfo from './channel_info';
import ChannelEdit from './channel_edit';
import Playlist from './playlist';
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
      return element.id == this.props.channelId;
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

    return (
      <div className="mt-3">
        {actionBtn}
        <ChannelInfo
          id={this.props.channelId}
          render={ channel => (
            !this.state.inStore &&
            <Btn state="primary rounded-circle" icon="plus" onClick={() => this.handleAdd(channel)} />
          )}/>
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
