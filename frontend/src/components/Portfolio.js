import React from 'react';

function Portfolio({ portfolio, clearPortfolio }) {
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      {portfolio.length === 0 ? (
        <p>Your portfolio is empty.</p>
      ) : (
        portfolio.map((stock, index) => (
          <div key={index} className="card mt-3">
            <div className="card-body">
              <h2 className="card-title">{stock.symbol || 'N/A'}</h2>
              <p><strong>Market Cap:</strong> ${stock.marketCap ? stock.marketCap.toLocaleString() : 'N/A'}</p>
              <p><strong>Revenue:</strong> ${stock.revenue ? stock.revenue.toLocaleString() : 'N/A'}</p>
              <p><strong>Net Income:</strong> ${stock.netIncome ? stock.netIncome.toLocaleString() : 'N/A'}</p>
              <p><strong>EPS:</strong> {stock.eps || 'N/A'}</p>
              <p><strong>P/E Ratio:</strong> {stock.peRatio || 'N/A'}</p>
              <p><strong>Volume:</strong> {stock.volume ? stock.volume.toLocaleString() : 'N/A'}</p>
              <p><strong>Open:</strong> ${stock.open ? stock.open.toFixed(2) : 'N/A'}</p>
              <p><strong>Close:</strong> ${stock.close ? stock.close.toFixed(2) : 'N/A'}</p>
              <p><strong>52-Week Range:</strong> {stock.fiftyTwoWeekRange || 'N/A'}</p>
              <p><strong>Earnings Date:</strong> {stock.earningsDate || 'N/A'}</p>
            </div>
          </div>
        ))
      )}
      <button className="btn btn-danger mt-4" onClick={clearPortfolio}>
        Clear Portfolio
      </button>
    </div>
  );
}

export default Portfolio;
