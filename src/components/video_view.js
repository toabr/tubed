import React from 'react';
import moment from 'moment';

export default function VideoView({video}) {
  // console.log('VideoView: ', video);

  let duration = Math.round( moment.duration(video.duration).asMinutes() );
  let thumbnail = video.thumbnails.medium;

  return(
    <div className="video-card">
      <a style={{textDecoration: 'none'}} href={`https://www.youtube.com/watch?v=${video.id}`} target="blank" >
        <div className="card">
          <div className="card-img-top">
            <img
            src={thumbnail.url}
            alt="video_thumbnail"
            width={thumbnail.width}
            height={thumbnail.height}
            />
            <div className="duration">
              {duration}
              <span>min</span>
            </div>
          </div>
          <div className="card-body">
            {video.title}
          </div>
          <div className="card-footer">
            <div className="date">{moment(video.publishedAt).format('HH:mm DD.MM.YY')}</div>
            <div className="views">
              {parseInt(video.viewCount).toLocaleString()}
              <span>views</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
