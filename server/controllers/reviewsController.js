const express = require("express");
const router = express.Router();
const review_detailModel = require('../model/review_detail.model');
const { validEmail, isNotEmpty, isInteger, validScore } = require('../utils/inputValidation');

router.post('/', async (req,res) => {
  const review = req.body;
  const testEmail = await review_detailModel.getAlltestEmails(review.email);

  if (
    !isInteger(review.provider_id) ||
    !isNotEmpty(review.reviewer_name) ||
    !validEmail(review.email) ||
    !validScore(review.overall) ||
    !validScore(review.ease_of_use) ||
    !validScore(review.coverage) ||
    !validScore(review.price) ||
    !validScore(review.customer_service) ||
    !isNotEmpty(review.customer_review)
  ) {
    return res.status(400).send("Invalid request.")
  }

  if (testEmail.length === 0) { // if email has never been used
    const insertion = await review_detailModel.insertReview(review);

    res.status(200).send("Your review has been added.");
  } else {

    let wasUsedWithProvider = false;

    for (let i = 0; i < testEmail.length; i++) {
      if(review.provider_id === testEmail[i].provider_id) {
        wasUsedWithProvider = true
      }
    }

    if (wasUsedWithProvider) { // if email has already been used to review the current provider.
      res.status(400).send("This email has already been used for this provider.");
    } else { // else, this email has been used, but for a different provider
      const insertion = await review_detailModel.insertReview(review);
      
      res.status(200).send("Your review has been added.");
    }
  }
});

module.exports = router;