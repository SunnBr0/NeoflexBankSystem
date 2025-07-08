import { fetchCurrency } from '../requets/currency';
import { fetchNewsData } from '../requets/news';
import { getObjectOrError, getStringOrError, isHTML } from './checkers';
import type { TDataCurrency, TNewsData, TResponseCurrency } from './type';
import { stringReduction } from './utils';

export const convertDataCurrency = async (
  baseCurrency: string,
  targetCurrency: string[]
) => {
  const validResponse = getObjectOrError<TResponseCurrency>(
    await fetchCurrency(baseCurrency)
  );
  const validData = getObjectOrError<TDataCurrency>(validResponse.data);
  const validConversionRates = validData.conversion_rates;
  const filterValidConversionRates = targetCurrency.reduce<
    Record<string, number>
  >((acc, item) => {
    if (item in validConversionRates) {
      acc[item] = Number((1 / Number(validConversionRates[item])).toFixed(2));
    }
    return acc;
  }, {});
  const validTimeLastUpdate = getStringOrError(validData.time_last_update_utc);
  return {
    conversion_rates: filterValidConversionRates,
    time_last_update_utc: validTimeLastUpdate,
  } as TDataCurrency;
};

export const convertNewsData = async (countNewsCard: number) => {
  const titleLength = 500;
  const descriptionLength = 500;
  const limitNews = 100;
  const maxNewsPageSize = 25;
  let diffLength = 0;
  const ArrayValidNewsCard = [];

  for (let page = 1; page < limitNews / maxNewsPageSize; page++) {
    const newsDataCard = getObjectOrError<TNewsData>(await fetchNewsData(page));
    const newsDataArticles = newsDataCard.data.articles;
    if (newsDataArticles.length === 0) break;
    if (ArrayValidNewsCard.length >= countNewsCard) break;
    const filterDataNewsCard = newsDataArticles
      .filter((item) => {
        return (
          item.urlToImage &&
          item.url &&
          item.description &&
          item.title &&
          item.title.length <= titleLength &&
          typeof item.description === 'string' &&
          item.description.length <= descriptionLength &&
          !isHTML(item.description)
        );
      })
      .map((item) => ({
        ...item,
        description:
          typeof item.description === 'string'
            ? stringReduction(item.description, 140)
            : '',
        title: stringReduction(item.description, 100),
      }));

    diffLength = countNewsCard - ArrayValidNewsCard.length;

    ArrayValidNewsCard.push(...filterDataNewsCard.slice(0, diffLength));
  }
  if (ArrayValidNewsCard.length === 0) return null;
  return ArrayValidNewsCard;
};
