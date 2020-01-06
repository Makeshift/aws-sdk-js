require('./node_loader');

var AWS = require('./core');

// Load all service classes
AWS.config.update({httpOptions:{agent: require('proxy-agent')()}})
require('../clients/all');

/**
 * @api private
 */
module.exports = AWS;
