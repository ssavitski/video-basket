import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import ENV from 'video-basket/config/environment';

const { vimeo:accessToken } = ENV.accessToken;
const { vimeo:host } = ENV.host;

let adapter;

module('Unit | Adapter | vimeo video', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    adapter = this.owner.lookup('adapter:vimeo-video');
  });

  test('settings for url request should exist', function(assert) {
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.vimeo.video;version=3.4',
    };

    assert.equal(adapter.get('host'), `https://${host}`,
      'hostname is set');
    assert.equal(adapter.get('namespace'), '',
      'namespace is empty');
    assert.deepEqual(adapter.get('headers'), headers,
      'headers are set');
  });

  test('url should be built based on query string', function(assert) {
    let word = 'California';
    let url = `https://${host}/tags/${word}/videos`;

    assert.equal(adapter.urlForQuery({ word }), url,
      'url is set based on one word');

    word = 'California dreaming';
    url = `https://${host}/tags/${word.split(' ').get('firstObject')}/videos`;

    assert.equal(adapter.urlForQuery({ word }), url,
      'url is set based on couple words');

  });
});
