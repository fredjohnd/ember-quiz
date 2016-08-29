import Ember from 'ember';

export default Ember.Route.extend({

  dataFetcher: Ember.inject.service(),

  model() {
    return this.get('dataFetcher').fetch();
  }
});
