const express = require("express");
const router = express.Router();
const providerModel = require('../model/provider.model');
const review_detailModel = require('../model/review_detail.model');
const average = require('../utils/average');

app.get('/', async (req, res) => {
  const providerInfo = await providerModel.providerInfo();

  const overallScores = await review_detailModel.overallScores().catch((err) => console.error(err));

  for (let i = 0; i < overallScores.length; i++) {
    providerInfo[i].overall = Number(overallScores[i].overall)
  }

  res.send(providerInfo); 
});

app.get('/:providerid', async (req, res) => {
  const provideId = Number(req.params.providerid);
  let providerInfo = await providerModel.providerInfoByID(provideId);

  if (providerInfo.length === 0) {
    res.status(404).send("providerId not found")
  } else {
    providerInfo = providerInfo[0]
    const reviews = await review_detailModel.reviews(provideId);

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