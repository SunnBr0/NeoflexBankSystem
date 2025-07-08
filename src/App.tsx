import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { useEffect } from 'react';
import {
  convertDataCurrency,
  convertNewsData,
} from './scripts/utils/transformations';
import { useDispatch } from 'react-redux';
import { setDataCurrency } from './store/currency/currencySlice';
import { setNewsData } from './store/news/newsSlice';
export const App = () => {
  const dispatch = useDispatch();

  async function fetchValidDataCurrency() {
    const baseCurrency = 'RUB';
    const targetCurrency = ['USD', 'EUR', 'CNY', 'CHF', 'TRY', 'JPY'];
    const validData = await convertDataCurrency(baseCurrency, targetCurrency);
    dispatch(setDataCurrency(validData));
  }
  async function fetchValidNewsData() {
    const countNewsCard = 21;
    const validNewsCard = await convertNewsData(countNewsCard);
    dispatch(setNewsData(validNewsCard ?? []));
  }

  useEffect(() => {
    const minutes = 15 * 60;
    const intervalTime = minutes * 1000;
    fetchValidDataCurrency();
    const intervalCurrency = setInterval(() => {
      fetchValidDataCurrency();
    }, intervalTime);

    return () => clearInterval(intervalCurrency);
  }, []);

  useEffect(() => {
    fetchValidNewsData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
