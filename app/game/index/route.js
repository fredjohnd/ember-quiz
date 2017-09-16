import Ember from 'ember';

export default Ember.Route.extend({

  dataFetcher: Ember.inject.service(),
  difficultyLevel: 'easy',

  model() {
    return this.get('dataFetcher').fetch({difficulty: this.get('difficultyLevel')});
  },

  actions: {
    startNewGame(difficultyLevel) {

      this.controller.setProperties({
        results: [],
        chosenAnswer: null,
        questionIndex: 0,
        disableButtons: false
      });

      this.set('difficultyLevel', difficultyLevel);
      this.refresh();
    }
  }
});
