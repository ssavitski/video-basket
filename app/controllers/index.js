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

  typingTimer: undefined,
  doneTypingInterval: 800,

  actions: {
    clearTiming() {
      clearTimeout(this.get('typingTimer'));
    },

    filterVideos() {
      this.send('clearTiming');

      const doneTyping = () => {
        this.get('target').send('refreshModel');
      };
      const doneTypingInterval = this.get('doneTypingInterval');
      const typingTimer = setTimeout(doneTyping, doneTypingInterval);

      this.set('typingTimer', typingTimer);
    },
  },
});
