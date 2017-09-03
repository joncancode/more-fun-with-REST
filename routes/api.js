'use strict';

const express = require('express');
const router = express.Router();

//GET
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });

});

//POST
router.post('/ninjas', (req, res) => {
  res.send({ type: 'POST' });

});

//PUT
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT' });

});

//DELETE
router.get('/ninjas/:id', (req, res) => {
  res.send({ type: 'DELETE' });

});

module.exports = router;