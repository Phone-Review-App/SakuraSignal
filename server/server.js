const express = require('express');


function setupServer () {
  const app = express();

  app.use(express.json());

  // add endpoints here

  app.get('/hello', (req, res) => {
    res.send('world')
  });

  return app;
}

module.exports = setupServer;