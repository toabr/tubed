import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import localStore from './data/local_store'

import AppHeader from './components/app_header';
import AppFooter from './components/app_footer';
import HomeView from './routes/home_view';
import NewsfeedView from './routes/newsfeed_view';
import CategorysView from './routes/categorys_view';
import CategoryView from './routes/category_view';
import ChannelView from './routes/channel_view';
import SearchView from './routes/search_view';

export default class App extends Component {
  state = {
    channels: [],
    routes: [{
      path: '/',
      exact: true,
      component: HomeView
    },{
      path: '/newsfeed',
      component: NewsfeedView
    },{
      path: '/categorys',
      component: CategorysView
    },{
      path: '/category/:id',
      component: CategoryView
    },{
      path: '/channel/:id',
      component: ChannelView
    },{
      path: '/search',
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
    console.log('### App mountet, Mode:', process.env.NODE_ENV);
    
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
      <Router basename={'/tubed'}>
        <React.Fragment>
          <AppHeader storedChannels={this.state.channels} />
          <div id="main" className="container-fluid">
            {this.state.channels.length > 0 && this.state.routes.map((route, i) =>
                <Route key={i} {...route} />
            )}
          </div>
          <AppFooter />
        </React.Fragment>
      </Router>
    );
  }
}
