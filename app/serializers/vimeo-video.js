import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // specify property name which will serve as ID
  primaryKey: 'resource_key',

  normalizeQueryResponse(store, primaryModelClass, payload) {
    arguments[2] = payload.data;

    return this._super(...arguments);
  },
});
