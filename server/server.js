const express = require('express');
const path = require('path');
//const db = require("../")


function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // add endpoints here

  app.get('/hello', (req, res) => {
    res.send('world')
  });

  return app;
}

module.exports = setupServer;