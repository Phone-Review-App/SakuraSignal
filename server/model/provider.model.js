const knex = require('../../db/index');

const PROVIDER_TABLE = 'provider';

module.exports = {
    PROVIDER_TABLE,
    getProviderInfo() {
        return knex(PROVIDER_TABLE)
            .select('*')
            .timeout(1500);
    },
    getProviderNames() {
        return knex(PROVIDER_TABLE)
            .select('id', 'name')
            .timeout(1500);
    },
    getProviderInfoByID(providerId) {
        return knex(PROVIDER_TABLE)
            .select('*')
            .where('id', providerId)
            .timeout(1500);
    },
    getProviderIdByName(providerName) {
        return knex(PROVIDER_TABLE)
            .select('id')
            .where('name', providerName)
            .timeout(1500);
    }
}