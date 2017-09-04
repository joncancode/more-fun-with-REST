'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

//create Schema and model
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  currentPlayer: {
    type: Boolean,
    default: true
  },
  hometown: {
    type: String
  },
  geometry: GeoSchema
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
