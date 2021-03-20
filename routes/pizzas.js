const express = require('express');
const router = express.Router();
const { mockDb } = require('../mockDb/mockDb');

router.get('/', (_, res) => {
  res.json(mockDb.mockPizzas);
});

module.exports = router;
