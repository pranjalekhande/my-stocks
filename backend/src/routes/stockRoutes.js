import express from 'express';
import { getStockData } from '../models/Stock.js';


const router = express.Router();

router.get('/:symbol', async (req, res) => {
  
  try {
    const { symbol } = req.params;
    console.log("be");
    console.log(symbol);
    const stockData = await getStockData(symbol);
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});


export default router;