import apiKey from './yt_api_key';

const ytApi = function(type,opt,callback) {
  const url = buildUrl(type,opt);
  (url !== null) && get(url,callback);
}

function buildUrl(type,opt) {
  let url;
  switch (type) {
    case 'search':
      url = "https://www.googleapis.com/youtube/v3/search?part=snippet"
          + `&q=${opt.q}&type=channel`;
      break;
    case 'channels':
      url = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2CbrandingSettings%2Cstatistics"
          + `&id=${opt.id}`;
      break;
    case 'playlistItems':
      url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails"
          + `&maxResults=${opt.maxResult}`
          + `&pageToken=${opt.pageToken}`
          + `&playlistId=${opt.playlistId}`;
      break;
    case 'videos':
      url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics"
          + `&id=${opt.id}`;
      break;
    default: url = null;
  }
  url = (url) ? `${url}&key=${apiKey}` : null;
  return url;
}

function get(url,callback) {
  // console.log('>> GET:', url);
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    callback(data);
  })
  .catch((err) => {
    console.log('>> yt_api:', err);
  });
}

export default ytApi;
