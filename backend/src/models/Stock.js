import axios from 'axios';
import { getMockStockData } from '../utils/mockData.js';


const useMockData = true; // Toggle this flag when ready to use the real API

export const getStockData = async (symbol) => {
    console.log("backend");
    console.log(symbol);
  if (useMockData) {
    return getMockStockData(symbol);
  }

  try {
    const response = await axios.get(`https://apidocs.fasttrack.net/stocks/${symbol}`, {
      headers: {
        'Account-ID': process.env.FASTTRACK_ACCOUNT_ID,
        'Password': process.env.FASTTRACK_PASSWORD,
        'Application-ID': process.env.FASTTRACK_APP_ID
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stock data from FastTrack API');
  }
};
