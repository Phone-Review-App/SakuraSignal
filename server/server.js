const express = require('express');
const path = require('path');
const providersController = require('./controllers/providersController');
const reviewsController = require('./controllers/reviewsController');

function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use('/api/providers', providersController);
  app.use('/api/reviews', reviewsController);

  app.get('/api/hello', (req, res) => {
    res.send('world')
  });
  
  return app;
}

module.exports = setupServer;