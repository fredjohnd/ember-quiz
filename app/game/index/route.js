import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {
        question: 'Onde está sediada a empresa de tecnologia Dascat Software?',
        answers: ['Aveiro', 'Coimbra', 'Lisboa', 'Porto'],
        correct: 'Coimbra'
      },
      {
        question: 'Quem é o maior boiolas à face da terra?',
        answers: ['Sérgio Costa', 'Frederico Duarte', 'Artur Albarran', 'Manuela Moura Guedes'],
        correct: 'Sérgio Costa'
      }];
  }
});
