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

  app.get('/review_detail', async (req, res) => {
    const providerInfo = await db('review_score')
      .select('*')
      .timeout(1500);
    console.log(providerInfo);
    res.send(providerInfo); 
  })
  
  return app;
}

module.exports = setupServer;