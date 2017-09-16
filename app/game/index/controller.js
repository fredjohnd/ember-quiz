import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({

  questionIndex: 0,
  chosenAnswer: null,
  disableButtons: false,
  soundPlayer: Ember.inject.service(),

  results: [],

  lastQuestionIndex: computed('model.length', function() {
    return this.get('model.length') - 1;
  }),

  isLastQuestion: computed.equal('lastQuestionIndex', 'questionIndex'),

  currentQuestion: Ember.computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).question;
  }),

  currentAnswers: computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).answers;
  }),

  correctAnswer: computed('model', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).correct;
  }),

  selectedAnswer: computed('model', 'chosenAnswer', 'questionIndex', function() {
    return this.get('model').objectAt(this.get('questionIndex')).answers.objectAt(this.get('chosenAnswer'));
  }),

  processAnswer(answer) {
    
    
    let question = this.get('currentQuestion');
    let correctAnswer = this.get('correctAnswer');
    
    let isCorrect = answer === correctAnswer;
    if (isCorrect) {
      this.get('soundPlayer').correct();
    } else {
      this.get('soundPlayer').incorrect();
    }

    let results = this.get('results');
    results.pushObject({
      question,
      correctAnswer,
      answer,
      isCorrect
    });

    this.set('chosenAnswer', answer);
  },

  actions: {
    nextQuestion() {
      this.set('chosenAnswer', null);
      this.set('disableButtons', false);
      this.incrementProperty('questionIndex');
    },

    pickAnswer(answer) {
      this.set('disableButtons', true);
      Ember.run.later(this, 'processAnswer', answer, 1000);
    }
  }
});
