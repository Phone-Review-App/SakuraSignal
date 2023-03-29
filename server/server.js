const express = require('express');
const path = require('path');
const db = require('../db/index');


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
    console.log(providerInfo);
    res.send(providerInfo); 
  })

  app.get('/review_score', async (req, res) => {
    const providerInfo = await db('review_score')
      .select('*')
      .timeout(1500);
    console.log(providerInfo);
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