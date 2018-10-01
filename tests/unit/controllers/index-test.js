import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { merge } from '@ember/polyfills';

import vimeo from 'video-basket/tests/mock-data/vimeo';
import youtube from 'video-basket/tests/mock-data/youtube';
import dailymotion from 'video-basket/tests/mock-data/dailymotion';

let ctrl;
const model = { dailymotion, youtube, vimeo };
const videos = merge(vimeo, youtube, dailymotion);

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    ctrl = this.owner.lookup('controller:index');
  });

  test('query params should be set', function(assert) {
    const { queryParams } = ctrl;

    assert.ok(queryParams.includes('search'),
      'search query param is set');
  });

  test('videos should be combined from different sources', function(assert) {
    ctrl.set('model', model);

    assert.deepEqual(ctrl.get('videos'), videos,
      'videos are combined from different sources');
  });
});
