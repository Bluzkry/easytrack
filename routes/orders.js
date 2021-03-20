const express = require('express');
const router = express.Router();
const { mockDb, editOrders } = require('../mockDb/mockDb');
const successfulOrder = require('../mockDb/order');

router.get('/', (_, res) => {
  res.json(mockDb.mockOrders);
});

router.post('/', (req, res) => {
  editOrders(req.body);
  res.json(mockDb.mockOrders);
});

module.exports = router;
