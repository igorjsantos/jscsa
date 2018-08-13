import express from 'express';
import * as config from '../config.json';
import { YoutubeService } from '../services/youtube';

const router = express.Router();
const service = new YoutubeService();

/* GET home page. */
router.get('/', async (req, res) => {
  const { regionCode } = req.query;
  const trends = await service.getTrendingVideos({regionCode});

  res.render('youtube/index', {
    title: config.title,
    videos: trends,
    filters: {
      country: {
        list: config.countryList,
        selected: regionCode || 'US'
      }
    }
  });
});

router.get('/:videoId', async (req, res) => {
  res.render('youtube/player', {
    title: config.title,
    videoId: req.params.videoId
  });
});

module.exports = router;
