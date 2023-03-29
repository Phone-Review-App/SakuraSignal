const knex = require('knex');
require('dotenv').config();
const knexConfigs = require("../knexfile");
//const knexConfig = process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('🍕', knexConfigs);

module.exports = knex(knexConfigs[process.env.NODE_ENV]);