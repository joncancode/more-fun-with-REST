'use strict';

const express = require('express');
const router = express.Router();

//GET
router.get('/stats', (req, res) => {
  res.send({ type: 'GET' });
});

//POST
router.post('/stats', (req, res) => {
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    number: req.body.number
  });
});

//PUT
router.put('/stats/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

//DELETE
router.delete('/stats/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
