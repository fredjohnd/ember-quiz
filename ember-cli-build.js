/* eslint-env node */
/* eslint-env es6:false */
/* eslint no-var:0 */
/* eslint object-shorthand:0 */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

var appScssSources = new Funnel('.', {
  srcDir: '/app/styles',
  include: ['**/*.scss'],
  destDir: '/scss'
});

var podStylesScss = new Funnel('.', {
  srcDir: '/tmp',
  include: ['pod-styles.scss'],
  destDir: '/scss'
});

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    hinting: false,
    'ember-cli-qunit': {
      useLintTree: false
    },
    babel: {
      includePolyfill: true
    },
    svg: {
      paths: ['app/svgs']
    }
  });

  if (app.env !== 'development') {
    return app.toTree(new MergeTrees([appScssSources, podStylesScss]));
  } else {
    return app.toTree();
  }
};
