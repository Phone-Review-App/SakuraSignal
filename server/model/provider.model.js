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
    }
}