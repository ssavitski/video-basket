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

  model({ search:word }) {
    const vimeoModelName = 'vimeo-video';
    const vimeoQueryParams = { word };
    const youtubeURL = `https://${host}/youtube/v3/search`;
    const data = {
      q: word,
      maxResults: 25,
      key,
      part: 'snippet',
    };
    const youtubeQueryParams = { data };
    // Search through dailymotion videos by string typed by user
    const filteredVideos = dailymotionVideos.filter(video =>
      video.title.indexOf(word) !== -1
    );

    return RSVP.hash({
      dailymotion: word ? filteredVideos : [],
      // Fetch filtered by string youtube videos
      youtube: word ? this.get('ajax').request(youtubeURL, youtubeQueryParams) : [],
      // Fetch filtered by string vimeo videos from Ember store
      vimeo: word ? this.get('store').query(vimeoModelName, vimeoQueryParams) : [],
    });
  },

  actions: {
    // Refresh model
    refreshModel() {
      this.refresh();
    },
  },
});
