const knex = require('../../db/index');

const PROVIDER_TABLE = 'provider';

module.exports = {
    PROVIDER_TABLE,
    providerInfo() {
        return knex(PROVIDER_TABLE)
            .select('*')
            .timeout(1500);
    },
    providerInfoByID(provideId) {
        return knex(PROVIDER_TABLE)
            .select('*')
            .where('id', provideId)
            .timeout(1500);
    },
    providerIdByName(providerName) {
        return knex(PROVIDER_TABLE)
            .select('id')
            .where('name', providerName)
            .timeout(1500);
    }
}