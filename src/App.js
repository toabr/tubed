import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import localStore from './data/local_store'

import AppHeader from './components/app_header';
import FeedView from './routes/feed_view';
import SearchView from './routes/search_view';
import ChannelView from './routes/channel_view';

const Home = (props) => {
  return <Redirect to={`/category/${props.storedChannels[0].category}`} />
}

export default class App extends Component {
  state = {
    channels: [],
    routes: [{
      path: '/',
      exact: true,
      component: Home
    },{
      path: '/category/:id',
      component: FeedView
    },{
      path: '/channel/:id',
      component: ChannelView
    },{
      path: '/find',
      component: SearchView
    }]
  }

  addChannel = (channel, callback) => {
    if(!channel.id) {
      console.log('## Add-error: ', channel);
      return null
    }

    console.log('## Add: ', channel);
    let channels = this.state.channels;
    channels.push({
      id: channel.id,
      title: channel.title,
      category: 'New',
      weight: 0
    });

    this.setState({channels});
    localStore.update(channels);
    callback(true);
  }

  deleteChannel = (channelId, callback) => {
    console.log('## Delete-id: ', channelId);

    let channels = this.state.channels;
    let index = channels.findIndex(x => x.id === channelId);
    channels.splice(index, 1);

    this.setState({channels});
    localStore.update(channels);

    callback(true);
  }

  saveChannel = (channel, callback) => {
    let channels = this.state.channels;
    let index = channels.findIndex(x => x.id === channel.id);
    console.log('\n', '# Save: ', channels[index] );

    this.setState({channels});
    localStore.update(channels);

    callback(true);
  }

  componentDidMount() {
    // build routes props
    let routes = this.state.routes.map( route => ({
      ...route,
      component: null,
      render: props => React.createElement(
        route.component, {
          storedChannels: this.state.channels,
          addChannel: this.addChannel,
          deleteChannel: this.deleteChannel,
          saveChannel: this.saveChannel,
          ...props
        }, null)
      })
    );
    this.setState({routes});

    // load stored channels
    this.setState({ channels: localStore.init() });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <AppHeader />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                {this.state.channels.length > 0 && this.state.routes.map((route, i) =>
                    <Route key={i} {...route} />
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
