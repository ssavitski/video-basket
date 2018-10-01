import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  test('loading state should be false by default', function(assert) {
    const ctrl = this.owner.lookup('controller:application');

    assert.equal(ctrl.get('loadingState'), false,
      'loading state is false');
  });
});
