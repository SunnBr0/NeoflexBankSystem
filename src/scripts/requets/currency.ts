import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
export const fetchCurrency = async (currentCurrency:string) => {
    // const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currentCurrency}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error('Error loading currency:', error);
    return new Error('Error response data currency ');
  }
};
