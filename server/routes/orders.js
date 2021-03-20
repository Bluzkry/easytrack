const express = require('express');
const router = express.Router();
const mockDb = require('../mockDb/mockDb');
const successfulOrder = require('../mockDb/order');

router.get('/', (_, res) => {
  res.json(mockDb.mockOrders);
});

router.post('/', (_, res) => {
  res.json(successfulOrder);
});

module.exports = router;
