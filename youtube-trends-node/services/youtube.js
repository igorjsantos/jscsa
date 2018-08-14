import Axios from 'axios';
import * as config from '../config.json';
import moment from "moment";

const axios = Axios.create({
  baseURL: config.youtubeApi.endpoint
});

export class YoutubeService {

  getDefaults() {
    return {
      part: 'snippet, statistics',
      chart: 'mostPopular',
      regionCode: 'US',
      maxResults: '24',
      key: config.youtubeApi.key
    };
  }

  getTrendingVideos(options) {
    const params = Object.assign({}, this.getDefaults(), options);

    let result = [];
    return axios.get('/', { params }).then(function (res) {
      result = res.data.items;

      for (let i = 0; i < result.length; i++) {
        result[i] = {
          id: result[i].id,
          title: result[i].snippet.title,
          thumbnail: result[i].snippet.thumbnails.high.url,
          publishedAt: moment(result[i].snippet.publishedAt).fromNow(),
          viewCount: result[i].statistics.viewCount,
          likeCount: result[i].statistics.likeCount
        };
      }

      return result;
    });
  }
}
