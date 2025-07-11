import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_NEWS;
export const fetchNewsData = async (currnetPage: number) => {
  const maxNewsPageSize = 25;
  try {
    const response = await axios.get(
      // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${currnetPage}&pageSize=${maxNewsPageSize}`
    );
    return response;
  } catch (error) {
    console.error('Error loading data:', error);
    return new Error('Error response news datas ');
  }
};
