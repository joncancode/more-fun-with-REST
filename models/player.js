'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  team: {
    type: String
  },
  currentPlayer: {
    type: Boolean,
    default: false
  }
  //add in geo location
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;