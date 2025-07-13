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
import { LoanPage } from './pages/loanPage/LoanPage';
import './style/homePage/header/header.scss';
import './style/homePage/map/map.scss';
import './style/homePage/main/main.scss';
import './style/homePage/creditCard/creditCard.scss';
import './style/homePage/featureInfo/featureInfo.scss';
import './style/homePage/currencyCard/currencyCard.scss';
import './style/homePage/support/support.scss';
import './style/homePage/footer/footer.scss';
import './style/utility/sizeValue.scss';
import './style/utility/fontFamily.scss';
import './style/utility/buttonStyle.scss';
import './style/loanPage/digitalCreditCard/digitalCreditCard.scss';
import './style/loanPage/navigateBarCreditCards/navigateBarCreditCards.scss';
import './style/loanPage/navigateBarCreditCards/creditCardsAbout.scss';
import './style/loanPage/navigateBarCreditCards/creditCardsRatesConditions.scss';
import './style/loanPage/navigateBarCreditCards/creditCardsCashback.scss';
import './style/loanPage/navigateBarCreditCards/creditCardsFaq.scss';
import './style/loanPage/informationGetCard/informationGetCard.scss';
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
        <Route path="/loan" element={<LoanPage />} />
      </Routes>
    </Router>
  );
};
