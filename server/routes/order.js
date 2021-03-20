const express = require('express');
const router = express.Router();
const { addOrder }= require('../mockDb/mockDb');
const successfulOrder = require('../mockDb/order');

router.post('/', (req, res) => {
  addOrder(req.body);
  res.json(successfulOrder);
});

module.exports = router;
