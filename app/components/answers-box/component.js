import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['answersBox'],

  answers: [],
  correctAnswer: null,
  chosenAnswer: null,
  disabled: false,

  randomizedAnswers: Ember.computed('answers', function() {
    let i = 0;
    let j = 0;
    let temp = null;
    let answers = this.get('answers').copy();
    for (i = answers.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    return answers;
  }),

  actions: {
    pickAnswer(answer) {
      this.attrs.pickAnswer(answer);
    }
  }

});
