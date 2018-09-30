import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('app header, content and footer elements should exists on the page', async function(assert) {
    await visit('/');

    assert.ok(!!find('#header'),
      'App header exists');
    assert.ok(!!find('#content'),
      'App content exists');
    assert.ok(!!find('#footer'),
      'App footer exists');
  });
});
