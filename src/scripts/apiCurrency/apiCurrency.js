  import axios from 'axios';
import { baseCurrency } from './currency';
import { targetCurrency } from './currency';

const timeHeader = document.getElementsByClassName('currency-card__aside');
const listCurrency = document.getElementsByClassName('currency-card__list');
const apiKey = import.meta.env.VITE_API_KEY;
const minutes = 15 * 60;
const intervalTime = minutes * 1000;

const fetchCurrency = async (currentCurrency) => {
  // const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currentCurrency}`;
  try {
    const response = await axios.get(url);
    const dataCurrency = {
      conversionRates: response.data.conversion_rates,
      timeLastUpdateUtc: response.data.time_last_update_utc,
    };
    console.log(response);
    console.log(dataCurrency);
    
    return dataCurrency;
  } catch (error) {
    console.error('Error loading currency:', error);
    return null;
  }
};

const updateCurrency = async (targetCurrency) => {
  let htmlContent = '';
  const dataCurrency = await fetchCurrency(baseCurrency);
  if (dataCurrency) {
    const { conversionRates, timeLastUpdateUtc } = dataCurrency;
    for (const currentCurrency of targetCurrency) {
      htmlContent += `
                <li class="currency-card__item">
                    <h3>${currentCurrency}:</h3>
                    <p>${(1 / Number(conversionRates[currentCurrency])).toFixed(2)}</p>
                </li>
            `;
    }
    listCurrency[0].innerHTML = htmlContent;
    const currentData = new Date(timeLastUpdateUtc).toLocaleDateString();
    timeHeader[0].children[0].textContent = `Update every 15 minutes, MSC ${currentData}`;
  }
};

updateCurrency(targetCurrency);
setInterval(() => updateCurrency(targetCurrency), intervalTime);
