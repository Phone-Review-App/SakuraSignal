const knex = require('knex');
const knexConfigs = require("../knexfile");
//const knexConfig = process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('🍕', NODE_ENV);
module.exports = knex(knexConfigs[NODE_ENV]);