'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/nbahometowns');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initializing routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

//list for requests
app.listen(process.env.port || 4000, function() {
  console.log('listening on port 4000');
});

