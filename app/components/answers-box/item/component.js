import Ember from 'ember';

export default Ember.Component.extend({

  questionIndex: 0,
  _oldQuestionIndex: 0,

  answer: '',
  chosenAnswer: null,
  correctAnswer: null,
  isClickedOn: false,
  disabled: false,

  didReceiveAttrs() {
    let _oldQuestionIndex = this.get('_oldQuestionIndex');
    let questionIndex = this.get('questionIndex');
    if (_oldQuestionIndex !== questionIndex) {
      this.set('isClickedOn', false);
    }

    this.set('_oldQuestionIndex', questionIndex);
  },

  buttonClasses: Ember.computed('questionIndex', 'chosenAnswer', 'isClickedOn', function() {
    let chosen = this.get('chosenAnswer');
    if (this.get('isClickedOn') && !chosen) return 'button-pending';
    if (!chosen) return '';

    let correct = this.get('correctAnswer');
    let current = this.get('answer');

    if (current === correct) return 'button-correct';
    if (current === chosen) return 'button-incorrect';
  }),

  actions: {
    pickAnswer(answer) {
      this.set('isClickedOn', true);
      this.attrs.pickAnswer(answer);
    }
  }
});
