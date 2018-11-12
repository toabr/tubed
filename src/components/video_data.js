import { Component } from 'react';

import ytApi from '../data/yt_api'

// expects an array of video id's
export default class VideoData extends Component {
  state = {
    videos: []
  }

  setData(data) {
    // console.log('response', data);
    const videos = data.items.map(item => ({
      id: item.id,
      categoryId: item.snippet.categoryId,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails,
      title: item.snippet.title,
      commentCount: item.statistics.commentCount,
      dislikeCount: item.statistics.dislikeCount,
      likeCount: item.statistics.likeCount,
      viewCount: item.statistics.viewCount,
      duration: item.contentDetails.duration
    }))
    return videos;
  }

  componentDidMount() {
    if(this.props.ids.length > 0) {
      ytApi('videos',{ id: this.props.ids }, (data) => {
        this.setState({ videos: this.setData(data) });
      });
    }
  }

  render() {
    // console.log('# Video data: ', this.props.ids);
    return this.props.render(this.state.videos);
  }
}
