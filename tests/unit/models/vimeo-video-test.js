import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import vimeo from 'video-basket/tests/mock-data/vimeo';

module('Unit | Model | vimeo video', function(hooks) {
  setupTest(hooks);

  test('vimeo video model should exist', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('vimeo-video', vimeo[0]);

    assert.ok(model && model.get('link') && model.get('embed'),
      'Model with props exists');
  });
});
