const knex = require('../../db/index');

const REVIEW_DETAIL_TABLE = 'review_detail';

module.exports = {
    REVIEW_DETAIL_TABLE,
    overallScores() {
        return Promise.all([
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 1),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 2),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 3),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 4),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 5),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 6),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 7),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 8),
            knex(REVIEW_DETAIL_TABLE)
              .select('overall')
              .where('provider_id', 9)
        ]);
    },
    reviews(provideId) {
        return knex(REVIEW_DETAIL_TABLE)
            .select('reviewer_name', 'overall', 'ease_of_use', 'coverage','price', 'customer_service', 'customer_review')
            .where('provider_id', provideId)
            .orderBy('id', 'desc')
            .timeout(1500);
    },
    testEmail(email) {
        return knex(REVIEW_DETAIL_TABLE)
            .select('*')
            .where('email', email)
            .timeout(1500);
    },
    insertion(review) {
        return knex(REVIEW_DETAIL_TABLE)
            .insert(review);
    }
}