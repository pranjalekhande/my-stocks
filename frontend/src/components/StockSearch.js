import React, { useState } from 'react';
import axios from 'axios';
function StockSearch({ addToPortfolio, token }) {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const searchStock = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.get(`http://localhost:3001/api/stocks/${symbol}`, {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // setStockData(response.data);

      const mockResponse = {
        symbol: symbol.toUpperCase(),
        marketCap: 2500000000000,
        revenue: 365000000000,
        netIncome: 94000000000,
        sharesOut: 16000000000,
        eps: 5.89,
        peRatio: 28.5,
        volume: 80000000,
        open: 175.20,
        close: 177.50,
        fiftyTwoWeekRange: '124.17 - 198.23',
        earningsDate: '2024-07-25',
      };
      setStockData(mockResponse);
      
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  // return (
      
  //   <div className="container">
  //     <form className="form-inline" onSubmit={searchStock}>
  //       <input
  //         className="form-control"
  //         type="text"
  //         value={symbol}
  //         onChange={(e) => setSymbol(e.target.value)}
  //         placeholder="Enter stock symbol"
  //       />
  //       <button className="btn btn-primary" type="submit">Search</button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="container">
      <form onSubmit={searchStock}>
        <input
          className="form-control"
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button className="btn btn-primary mt-2" type="submit">Search</button>
      </form>

      {stockData && (
        <div className="mt-4">
          <h2>{stockData.symbol} Stock Details</h2>
          <p><strong>Market Cap:</strong> ${stockData.marketCap.toLocaleString()}</p>
          <p><strong>Revenue:</strong> ${stockData.revenue.toLocaleString()}</p>
          <p><strong>Net Income:</strong> ${stockData.netIncome.toLocaleString()}</p>
          <p><strong>EPS:</strong> {stockData.eps}</p>
          <p><strong>P/E Ratio:</strong> {stockData.peRatio}</p>
          <p><strong>Volume:</strong> {stockData.volume.toLocaleString()}</p>
          <p><strong>Open:</strong> ${stockData.open}</p>
          <p><strong>Close:</strong> ${stockData.close}</p>
          <p><strong>52-Week Range:</strong> {stockData.fiftyTwoWeekRange}</p>
          <p><strong>Earnings Date:</strong> {stockData.earningsDate}</p>

          <button className="btn btn-success mt-2" onClick={() => addToPortfolio(stockData)}>
            Add to Portfolio
          </button>
        </div>
      )}
    </div>
  );
}


export default StockSearch;