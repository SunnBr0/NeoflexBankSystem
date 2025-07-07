import iconBank from '../../../../assets/currencyCard/iconBank.svg';
import { words } from '../../../../lang/lang';

export const CurrencyCard = () => {
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
          <li className="currency-card__item"></li>
          <li className="currency-card__item"></li>
          <li className="currency-card__item"></li>
          <li className="currency-card__item"></li>
          <li className="currency-card__item"></li>
          <li className="currency-card__item"></li>
        </ul>
        <p className="currency-card__subtext">
          {words.homePage.currencyCard.UK.subtext}
        </p>
      </section>
      <aside className="currency-card__aside">
        <p>{words.homePage.currencyCard.UK.lastUpdate}</p>
        <figure className="currency-card__figure">
          <img src={iconBank} alt="" />
        </figure>
      </aside>
    </section>
  );
};
