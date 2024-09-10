// backend/routes/stocks.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const ALPHA_VANTAGE_API_KEY = '60CIMA2FHBJ2MNOF';

router.get('/:symbol', async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const stockData = response.data['Time Series (5min)'];

    const latestKey = Object.keys(stockData)[0];
    const latestData = stockData[latestKey];

    const stockDetails = {
      name: symbol,
      price: latestData['1. open'],
      change: (
        ((latestData['4. close'] - latestData['1. open']) /
          latestData['1. open']) *
        100
      ).toFixed(2),
    };

    res.json(stockDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching stock data' });
  }
});

module.exports = router;
