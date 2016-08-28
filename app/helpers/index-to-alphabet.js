import Ember from 'ember';
const CHARS = ['A', 'B', 'C', 'D'];

export function indexToAlphabet(params/*, hash*/) {
  return CHARS[params[0]];
}

export default Ember.Helper.helper(indexToAlphabet);
