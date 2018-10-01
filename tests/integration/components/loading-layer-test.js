import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loading-layer', function(hooks) {
  setupRenderingTest(hooks);

  test('loading icon should exist', async function(assert) {
    await render(hbs`{{loading-layer}}`);

    assert.ok(this.element.querySelector('img').length,
      'loading icon exists');
  });
});
