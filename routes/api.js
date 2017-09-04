'use strict';

const express = require('express');
const router = express.Router();

const Player = require('../models/player');

//GET
router.get('/stats', (req, res, next) => {
  res.send({ type: 'GET' });
});

//POST
router.post('/stats', (req, res, next) => {
  Player.create(req.body)
    .then(player => {
      res.send(player);
    })
    .catch(next);
});

//PUT
router.put('/stats/:id', (req, res, next) => {
  Player.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Player.findOne({ _id: req.params.id }).then(player => {
      res.send(player);
    });
  });
});

//DELETE
router.delete('/stats/:id', (req, res, next) => {
  Player.findByIdAndRemove({ _id: req.params.id }).then(player => {
    res.send(player);
  });
});

module.exports = router;
