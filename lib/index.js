
/**
 * Expose `scorecard`.
 */

module.exports = scorecard;

/**
 * Scorecard.
 */

function scorecard(){
  return {
    restrict: 'E',
    scope: {type: '@', expand: '=', scorecard: '='},
    template: require('./template.html'),
    transclude: true
  };
}

