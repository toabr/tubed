import React, { Component } from 'react';
import moment from 'moment';

const Vimg = function({thumbnail}) {
  return(
    <div className="card-img-top" style={{ background: '#ddd' }} >
      <img
        width={thumbnail.width}
        height={thumbnail.height}
        src={thumbnail.url}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default function VideoView({video}) {
  // console.log('VideoView: ', video);

  let duration = Math.round( moment.duration(video.duration).asMinutes() );
  let thumbnail = video.thumbnails.medium;

  return(
    <a style={{textDecoration: 'none'}} href={`https://www.youtube.com/watch?v=${video.id}`} target="blank" >
      <div className="card" style={{height:'100%'}}>
        <Vimg thumbnail={thumbnail} />
        <div className="card-body p-1">
          <h6 className="">
            <div className="text-dark">{video.title}</div>
          </h6>
        </div>
        <div className="card-footer p-1 text-muted small" >
          <div>
            <span>{moment(video.publishedAt).format('HH:mm DD.MM.YY')} | </span>
            <span>{parseInt(video.viewCount).toLocaleString()} | </span>
            <span>{duration}min</span>
          </div>
        </div>
      </div>
    </a>
  );
}
