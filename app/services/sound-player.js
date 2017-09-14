import Ember from 'ember';

export default Ember.Service.extend({

  correct() {
    let snd = new Audio('sfx/correct_1.mp3');
    //snd.play();
  },

  incorrect() {
    let snd = new Audio('sfx/incorrect.mp3');
    //snd.play();
  }
});
