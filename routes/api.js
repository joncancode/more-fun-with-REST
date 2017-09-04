'use strict';

const express = require('express');
const router = express.Router();

const Player = require('../models/player');

// GET ALL PLAYERS
// router.get('/hometowns', (req, res, next) => {
//   Player.find({}).then( players => {
//     res.send(players);
//   });
// });

//GET
router.get('/hometowns', (req, res, next) => {
  Player.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}
  ).then( (players) => {
    res.send(players);
  });
  
});

//POST
router.post('/hometowns', (req, res, next) => {
  Player.create(req.body)
    .then(player => {
      res.send(player);
    })
    .catch(next);
});

//PUT
router.put('/hometowns/:id', (req, res, next) => {
  Player.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Player.findOne({ _id: req.params.id }).then(player => {
      res.send(player);
    });
  });
});

//DELETE
router.delete('/hometowns/:id', (req, res, next) => {
  Player.findByIdAndRemove({ _id: req.params.id }).then(player => {
    res.send(player);
  });
});

module.exports = router;
