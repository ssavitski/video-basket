import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

// Fetch access token and host name for API request from config
import ENV from 'video-basket/config/environment';
// Fetch json with dailymotion videos from local files
import dailymotionVideos from 'video-basket/data/dailymotion-videos';

const { youtube:key } = ENV.accessToken;
const { youtube:host } = ENV.host;

export default Route.extend({
  ajax: service(),

  model() {
    const vimeoModelName = 'vimeo-video';
    const vimeoQueryParams = { word: 'California' };
    const youtubeURL = `https://${host}/youtube/v3/search`;
    const data = {
      q: 'California',
      maxResults: 25,
      key,
      part: 'snippet',
    };
    const youtubeQueryParams = { data };

    return RSVP.hash({
      dailymotion: dailymotionVideos,
      youtube: this.get('ajax').request(youtubeURL, youtubeQueryParams),
      vimeo: this.get('store').query(vimeoModelName, vimeoQueryParams),
    });
  },
});
