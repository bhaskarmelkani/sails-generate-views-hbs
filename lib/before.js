/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');




/**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

module.exports = function (scope, cb) {


  // scope.rootPath is the base path for this generator
  //
  // e.g. if this generator specified the target:
  // './Foobar.md': { copy: 'Foobar.md' }
  //
  // And someone ran this generator from `/Users/dbowie/sailsStuff`,
  // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
  if (!scope.rootPath) {
    return cb( INVALID_SCOPE_VARIABLE('rootPath') );
  }


  // Attach defaults
  _.defaults(scope, {
    createdAt: new Date()
  });

  //
  // Take multiple "passes" if necessary.
  //

  _.defaults(scope, {
    rootPath: scope.rootPath
  });

  // When finished, we trigger a callback with no error
  // to begin generating files/folders as specified by
  // the `targets` below.
  cb();
};
