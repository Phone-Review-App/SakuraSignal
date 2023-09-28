const express = require("express");
const router = express.Router();
const providerModel = require('../model/provider.model');
const review_detailModel = require('../model/review_detail.model');
const average = require('../utils/average');

router.get('/', async (req, res) => {
  const providerInfo = await providerModel.getProviderInfo();

  const overallScores = await review_detailModel.getOverallScores().catch((err) => console.error(err));

  for (let i = 0; i < overallScores.length; i++) {
    providerInfo[i].overall = Number(overallScores[i].overall)
  }

  res.send(providerInfo); 
});

router.get('/names', async (req, res) => {
  const providerNames = await providerModel.getProviderNames();

  res.send(providerNames); 
});

router.get('/:providerIdOrName', async (req, res) => {
  let providerIdOrName = req.params.providerIdOrName;
  let providerId;

  if (isNaN(providerIdOrName)) {
    let arrayOfId = await providerModel.getProviderIdByName(providerIdOrName);

    if (arrayOfId.length === 0) {
      return res.status(404).send("The provider does't exist in the review website.");
    } else {
      providerId = arrayOfId[0]['id'];
    }
  } else {
    providerId = Number(providerIdOrName);
  }

  let providerInfo = await providerModel.getProviderInfoByID(providerId);
  
  if (providerInfo.length === 0) {
    return res.status(404).send("providerId not found")
  } else {
    providerInfo = providerInfo[0]
    const reviews = await review_detailModel.getReviewInfo(providerId);

    let averageOverall = Number(average(reviews.map((element) => {
      return element.overall;
    })).toFixed(2));
    let averageEOU = Number(average(reviews.map((element) => {
      return element.ease_of_use;
    })).toFixed(2));
    let averageCoverage = Number(average(reviews.map((element) => {
      return element.coverage;
    })).toFixed(2));
    let averagePrice = Number(average(reviews.map((element) => {
      return element.price;
    })).toFixed(2));
    let averageService = Number(average(reviews.map((element) => {
      return element.customer_service;
    })).toFixed(2));

    providerInfo.overall = averageOverall;
    providerInfo.ease_of_use = averageEOU;
    providerInfo.coverage = averageCoverage;
    providerInfo.price = averagePrice;
    providerInfo.customer_service = averageService;

    res.send([providerInfo, reviews]);
  }
});

module.exports = router;