import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  // combine all videos into one array
  videos: computed.union(
    'model.dailymotion',
    'model.youtube.items',
    'model.vimeo'
  ),
});
