const express = require('express');
const path = require('path');
const db = require('../db/index');
const average = require('./utils/average');


function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // add endpoints here

  app.get('/hello', (req, res) => {
    res.send('world')
  });

  app.get('/provider', async (req, res) => {
    const providerInfo = await db('provider')
      .select('*')
      .timeout(1500);

    const overallScores = await Promise.all([
      db('review_detail')
        .select('overall')
        .where('provider_id', 1),
      db('review_detail')
        .select('overall')
        .where('provider_id', 2),
      db('review_detail')
        .select('overall')
        .where('provider_id', 3),
      db('review_detail')
        .select('overall')
        .where('provider_id', 4),
      db('review_detail')
        .select('overall')
        .where('provider_id', 5),
      db('review_detail')
        .select('overall')
        .where('provider_id', 6),
      db('review_detail')
        .select('overall')
        .where('provider_id', 7),
      db('review_detail')
        .select('overall')
        .where('provider_id', 8),
      db('review_detail')
        .select('overall')
        .where('provider_id', 9)
    ]).catch((err) => console.error(err));

    const arrOfArrOfOverallScores = overallScores.map((element) => {
      return element.map((subelement) => subelement['overall'])
    })

    const arrOfAverageScores = arrOfArrOfOverallScores.map((element) => Number(average(element).toFixed(2)));

    for (let i = 0; i < arrOfAverageScores.length; i++) {

      providerInfo[i].overall = arrOfAverageScores[i]
    }

    res.send(providerInfo); 
  })

  app.get('/provider/:providerid', async (req, res) => {
    const provideId = Number(req.params.providerid);
    let providerInfo = await db('provider')
      .select('*')
      .where('id', provideId)
      .timeout(1500);

    providerInfo = providerInfo[0]
    const reviews = await db('review_detail')
      .select('reviewer_name', 'overall', 'ease_of_use', 'coverage','price', 'customer_service', 'customer_review')
      .where('provider_id', provideId)
      .timeout(1500);

    let averageOverall = average(reviews.map((element) => {
      return element.overall;
    }));
    let averageEOU = average(reviews.map((element) => {
      return element.ease_of_use;
    }));
    let averageCoverage = average(reviews.map((element) => {
      return element.coverage;
    }));
    let averagePrice = average(reviews.map((element) => {
      return element.price;
    }));
    let averageService = average(reviews.map((element) => {
      return element.customer_service;
    }));

    providerInfo.overall = averageOverall;
    providerInfo.ease_of_use = averageEOU;
    providerInfo.coverage = averageCoverage;
    providerInfo.price = averagePrice;
    providerInfo.customer_service = averageService;
    
    // console.log(provideId);
    // console.log(providerInfo);
    // console.log(reviews);
    // console.log(averageOverall);

    res.send([providerInfo, reviews]);
  })

  app.get('/review_detail', async (req, res) => {
    const providerInfo = await db('review_detail')
      .select('*')
      .timeout(1500);
    
    res.send(providerInfo); 
  })
  
  return app;
}

module.exports = setupServer;