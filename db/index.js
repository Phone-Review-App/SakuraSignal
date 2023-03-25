const knex = require('knex');
const knexConfigs = require("./knexfile");
const knexConfig = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = knex(knexConfigs[knexConfig]);