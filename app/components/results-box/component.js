import Ember from 'ember';

export default Ember.Component.extend({

    percentageCorrect: Ember.computed('model', function () {
        return this.get('model').filterBy('isCorrect').get('length') / this.get('model.length') * 100 ;
    }),

    grade: Ember.computed('percentageCorrect', function () {
        let percent = this.get('percentageCorrect');
        if (percent < 50) return 'Bad...';
        if (percent < 75) return 'Good.';
        if (percent < 99) return 'Excellent!';
        if (percent === 100) return 'Perfect!!!';

    })
});
