const knex = require('knex');
const secerts = require('../config/secrets')

const environment = secerts.environment || 'development';
const config = require('../knexfile.js')[environment];



module.exports = knex(config);
