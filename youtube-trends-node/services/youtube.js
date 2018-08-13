import Axios from 'axios';
import * as config from '../config.json';
import moment from "moment";

const axios = Axios.create({
  baseURL: config.youtubeApi.endpoint
});

export class YoutubeService {
  getTrendingVideos(options) {
    const defaults = {
      part: 'snippet, contentDetails',
      chart: 'mostPopular',
      regionCode: 'US',
      maxResults: '24',
      key: config.youtubeApi.key
    };

    const params = Object.assign({}, defaults, options);

    let result = [];
    return axios.get('/', {params}).then(function(res){
      result = res.data.items;

      for (let i = 0; i < result.length; i++) {
        result[i] = {
          id: result[i].id,
          title: result[i].snippet.title,
          thumbnail: result[i].snippet.thumbnails.high.url,
          publishedAt: moment(result[i].snippet.publishedAt).fromNow()
        };
      }

      return result;
    });
  }
}
