import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { typeOf } from '@ember/utils';

let route, appCtrl;

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    route = this.owner.lookup('route:index');
    appCtrl = this.owner.lookup('controller:application');
  });

  hooks.needs = [
    'service:ajax',
    'controller:application',
  ];

  test('application loading state should be changed', function(assert) {
    route.send('loading');

    assert.notOk(appCtrl.get('loadingState'),
      'app loading state is true');

    route.afterModel();

    assert.notOk(appCtrl.get('loadingState'),
      'app loading state is false');
  });

  test('service ajax should be injected', function(assert) {
    assert.equal(typeOf(route.get('ajax')), 'instance',
      'service ajax is injected');
  });

  test('model should be refreshed', function(assert) {
    route.refresh = () => route.set('isRefreshed', true);

    route.send('refreshModel');

    assert.ok(route.get('isRefreshed'),
      'model is refreshed');
  });
});
