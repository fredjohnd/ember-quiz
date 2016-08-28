import Ember from 'ember';

export default Ember.Component.extend({

  answer: '',
  chosenAnswer: null,
  correctAnswer: null,
  buttonClasses: Ember.computed('chosenAnswer', function() {
    let chosen = this.get('chosenAnswer');
    if (!chosen) return false;

    let correct = this.get('correctAnswer');
    let current = this.get('answer');

    if (current === correct) return 'button-correct';
    if (current === chosen) return 'button-incorrect';
  })
});
