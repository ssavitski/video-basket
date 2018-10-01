import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import vimeo from 'video-basket/tests/mock-data/vimeo';
import youtube from 'video-basket/tests/mock-data/youtube';
import dailymotion from 'video-basket/tests/mock-data/dailymotion';

module('Integration | Helper | get-video-url', function(hooks) {
  setupRenderingTest(hooks);


  test('url for video player should be built based on input obj', async function(assert) {
    const dailymotionVideoID = dailymotion[0].url.split('/').get('lastObject');
    const vimeoURL = vimeo[0].embed.html.match(/\ssrc=(?:(?:"([^"]*)"))/i)[1] || '';
    const youtubeURL = `https://www.youtube.com/embed/${youtube[0].id.videoId}?rel=0`;
    const dailymotionURL = `https://www.dailymotion.com/embed/video/${dailymotionVideoID}`;

    this.set('inputValue', vimeo[0]);

    await render(hbs`{{get-video-url inputValue}}`);

    assert.equal(this.element.textContent.trim(), vimeoURL,
      'url is set to vimeo');

    this.set('inputValue', youtube[0]);

    assert.equal(this.element.textContent.trim(), youtubeURL,
      'url is set to youtube');

    this.set('inputValue', dailymotion[0]);

    assert.equal(this.element.textContent.trim(), dailymotionURL,
      'url is set to dailymotion');
  });
});
