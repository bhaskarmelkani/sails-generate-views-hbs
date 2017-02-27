/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');


/**
 * sails-generate-views-hbs
 *
 * Usage:
 * `sails generate views-hbs`
 *
 * @description Generates a views-hbs
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  before: require('./before'),

  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {
    './views/403.handlebars': { copy: 'views/403.handlebars' },
    './views/404.handlebars': { copy: 'views/404.handlebars' },
    './views/500.handlebars': { copy: 'views/500.handlebars' },
    './views/homepage.handlebars': { copy: 'views/homepage.handlebars' },
    './views/partials/links.handlebars': { copy: 'views/partials/links.handlebars' },
    './views/layouts/layout.handlebars': { copy: 'views/layouts/layout.handlebars' }
  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, '../templates')
};





/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "views-hbs":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-views-hbs`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
