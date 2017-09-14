import Ember from 'ember';
import CONFIG from '../config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  fetch() {

    return new Promise((resolve, reject) => {
      Ember.$.ajax({
        url: `${CONFIG.API.endpoint}/api.php?amount=10&encode=base64`,
        success: ((result) => {
          let results = this._normalizeResults(result.results);
          if (results.length) resolve(results);
          else reject(results);
        }),
        error: ((jqXHR) => {
          reject(jqXHR);
        })
      });
    });
  },

  _normalizeResults(results) {
    return results.map((question) => {
      let answers = question.incorrect_answers.map(a => atob(a));
      let correct = atob(question.correct_answer);
      answers.push(correct);
      return {
        question: atob(question.question),
        answers: answers,
        correct: correct
      };
    });
  }
});
