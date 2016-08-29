import Ember from 'ember';

export default Ember.Component.extend({

  answer: '',
  chosenAnswer: null,
  correctAnswer: null,
  isClickedOn: false,

  disabled: false,

  buttonClasses: Ember.computed('chosenAnswer', 'isClickedOn', function() {
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
