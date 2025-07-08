import { useSelector } from 'react-redux';
import iconBank from '../../../../assets/currencyCard/iconBank.svg';
import { words } from '../../../../lang/lang';
import type { RootState } from '../../../../store/store';

export const CurrencyCard = () => {
  const { conversion_rates, time_last_update_utc } = useSelector(
    (state: RootState) => state.currency
  );

  return (
    <section className="currency-card">
      <section className="currency-card__section">
        <h2 className="currency-card__header">
          {words.homePage.currencyCard.UK.header}
        </h2>
        <p className="currency-card__title">
          {words.homePage.currencyCard.UK.title}
        </p>
        <ul className="currency-card__list">
          {Object.entries(conversion_rates).map(([key, item]) => (
            <li key={`${key}-${item}`} className="currency-card__item">
              <h3>{key}:</h3>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <p className="currency-card__subtext">
          {words.homePage.currencyCard.UK.subtext}
        </p>
      </section>
      <aside className="currency-card__aside">
        {time_last_update_utc ? (
          <p>{`Update every 15 minutes, MSC ${new Date(time_last_update_utc).toLocaleDateString()}`}</p>
        ) : (
          <p>{words.homePage.currencyCard.UK.lastUpdate}</p>
        )}
        <figure className="currency-card__figure">
          <img src={iconBank} alt="" />
        </figure>
      </aside>
    </section>
  );
};
