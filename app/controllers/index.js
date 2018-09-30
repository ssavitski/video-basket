import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: [
    'search',
  ],
  // combine all videos into one array
  videos: computed.union(
    'model.dailymotion',
    'model.youtube.items',
    'model.vimeo'
  ),

  actions: {
    refreshModel() {
      this.get('target').send('refreshModel');
    },
  },
});
