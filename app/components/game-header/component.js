import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings: ['noMoreQuestions', ':gameHeader'],

  index: 0,
  questionCount: 0,

  currentQuestionIndex: Ember.computed('index', function() {
    return this.get('index') + 1;
  }),

  noMoreQuestions: Ember.computed('currentQuestionIndex', 'questionCount', function() {
    return this.get('questionCount') === this.get('currentQuestionIndex');
  }),

  actions: {
    nextQuestion() {
      if (this.get('noMoreQuestions')) {
        return false;
      } else {
        this.sendAction('nextQuestion');
      }
    }
  }
});
