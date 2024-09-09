const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    buyPrice: { type: Number, required: true }
});

const portfolioSchema = new mongoose.Schema({
    user: { type: String, required: true },
    stocks: [stockSchema]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
