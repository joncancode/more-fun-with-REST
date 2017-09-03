'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());

//initializing routes
app.use('/api', require('./routes/api'));

//list for requests
app.listen(process.env.port || 4000, function() {
  console.log('listening on port 4000');
});

