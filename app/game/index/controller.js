import Ember from 'ember';

export default Ember.Controller.extend({
  myProp: true,
  questionIndex: 0,
  chosenAnswer: null,

  currentQuestion: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).question;
  }),

  currentAnswers: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).answers;
  }),

  correctAnswer: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).correct;
  }),

  actions: {
    nextQuestion() {
      this.set('chosenAnswer', null);
      this.incrementProperty('questionIndex');
    },

    pickAnswer(answer) {
      this.set('chosenAnswer', answer);
    }
  }
});
