const Portfolio = require('../models/Portfolio');

// Add stock to portfolio
exports.addStock = async (req, res) => {
    const { user, symbol, quantity, buyPrice } = req.body;

    try {
        let portfolio = await Portfolio.findOne({ user });
        if (!portfolio) {
            portfolio = new Portfolio({ user, stocks: [] });
        }

        const stock = { symbol, quantity, buyPrice };
        portfolio.stocks.push(stock);
        await portfolio.save();

        res.status(201).json({ message: 'Stock added to portfolio', portfolio });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get user portfolio
exports.getPortfolio = async (req, res) => {
    const { user } = req.params;

    try {
        const portfolio = await Portfolio.findOne({ user });
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }

        res.status(200).json(portfolio);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
