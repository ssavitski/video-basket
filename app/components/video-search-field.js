/**
 * Search field which serves for user to provide string for video filtering
 * @param {*} value - string typed by user
 * @param {*} filter - action/callback/hanler which has to be executed
 * after "doneTypingInterval" ms when user stops entering string
 */

import Component from '@ember/component';

export default Component.extend({
  // store for timer
  typingTimer: undefined,
  // delay between user stops typing and filter of videos
  doneTypingInterval: 800, // ms

  actions: {
    clearTiming() {
      clearTimeout(this.get('typingTimer'));
    },

    filterVideos() {
      this.send('clearTiming');
      // Add delay between user stops typing and handler execution
      const doneTypingInterval = this.get('doneTypingInterval');
      const typingTimer = setTimeout(this.get('filter'), doneTypingInterval);

      this.set('typingTimer', typingTimer);
    },
  },
});
