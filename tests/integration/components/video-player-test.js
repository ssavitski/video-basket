import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import vimeo from 'video-basket/tests/mock-data/vimeo';

module('Integration | Component | video-player', function(hooks) {
  setupRenderingTest(hooks);

  test('iframe with video player should exist', async function(assert) {
    this.set('video', vimeo[0]);

    await render(hbs`{{video-player video=video}}`);

    assert.ok(this.element.querySelector('iframe').length,
      'iframe with video player exists');
  });
});
