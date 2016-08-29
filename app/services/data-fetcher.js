import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  fetch() {

    return new Promise((resolve, reject) => {
      Ember.$.ajax({
        url: 'csv/level1.csv',
        success: ((result) => {
          let results = this._normalizeResults(result);
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
    let data = results.split('\n');
    return data.reduce((memo, line) => {
      let data = line.split(',');
      let size = data.length;
      if (size < 4) return memo;
      let questionRangeEnd = size - 4;
      let question = {
        question: data.slice(0, questionRangeEnd).join(),
        answers: data.slice(questionRangeEnd, data.length),
        correct: data[questionRangeEnd]
      };
      memo.pushObject(question);
      return memo;
    }, []);
  }
});
