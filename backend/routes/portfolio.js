const express = require('express');
const { addStock, getPortfolio } = require('../controllers/portfolioController');
const router = express.Router();

router.post('/add', addStock);   // Add a stock to portfolio
router.get('/:user', getPortfolio);  // Get user portfolio

module.exports = router;
