import DS from 'ember-data';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';

// Fetch access token and host name for API request from config
import ENV from 'video-basket/config/environment';

const { vimeo:accessToken } = ENV.accessToken;
const { vimeo:host } = ENV.host;

export default DS.JSONAPIAdapter.extend({
  host: `https://${host}`,
  namespace: '',

  // Add required headers to request
  headers: computed(function() {
    return {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.vimeo.video;version=3.4',
    };
  }).volatile(),

  urlForQuery({ word }) {
    // Return default url if there is no word or it is empty
    if (isEmpty(word)) {
      return this._super(...arguments);
    }
    // Construct proper url if word exists
    const host = this.get('host');
    const namespace = this.get('namespace');
    const pathname = `/tags/${word}/videos`;

    return `${host}${namespace}${pathname}`;
  },
});
