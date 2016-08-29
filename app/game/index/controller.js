import Ember from 'ember';

export default Ember.Controller.extend({
  myProp: true,
  questionIndex: 0,
  chosenAnswer: null,
  disableButtons: false,
  soundPlayer: Ember.inject.service(),

  currentQuestion: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).question;
  }),

  currentAnswers: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).answers;
  }),

  correctAnswer: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).correct;
  }),

  processAnswer(answer) {
    this.set('chosenAnswer', answer);

    if (answer === this.get('correctAnswer')) {
      this.get('soundPlayer').correct();
    } else {
      this.get('soundPlayer').incorrect();
    }
  },

  actions: {
    nextQuestion() {
      this.set('chosenAnswer', null);
      this.set('disableButtons', false);
      this.incrementProperty('questionIndex');
    },

    pickAnswer(answer) {
      this.set('disableButtons', true);
      Ember.run.later(this, 'processAnswer', answer, 5000);
    }
  }
});
