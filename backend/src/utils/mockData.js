const mockStockData = {
    AAPL: {
      symbol: 'AAPL',
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
      earningsDate: '2024-07-25'
    },
    // Add more mock data for other stocks
  };
  
  export const getMockStockData = (symbol) => {
    return mockStockData[symbol.toUpperCase()] || null;
  };