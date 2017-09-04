'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  position: {
    type: String
  },
  currentPlayer: {
    type: Boolean,
    default: true
  }
  //add in geo location
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;