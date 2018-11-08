import apiKey from './yt_api_key';

export const ytSearch = (opt,callback) => {
  let url = "https://www.googleapis.com/youtube/v3/search?part=snippet"
  + `&q=${opt.q}&type=channel`
  + `&key=${apiKey}`;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    callback(data);
  });
}

export const getChannel = (opt,callback) => {
  let url = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics"
  + `&id=${opt.id}`
  + `&key=${apiKey}`;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    callback(data.items[0]);
  });
}

export const getPlaylist = (opt,callback) => {
  let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails"
  + `&maxResults=${opt.maxResult}`
  + `&pageToken=${opt.pageToken}`
  + `&playlistId=${opt.playlistId}`
  + `&key=${apiKey}`;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    callback(data);
  });
}

export const getVideoData = (opt,callback) => {
  const ids = opt.ids;
  if(ids !== '') {
    // console.log('### API: ', ids);
    let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics"
    + `&id=${ids}`
    + `&key=${apiKey}`;

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      callback(data);
    });
  }
}
