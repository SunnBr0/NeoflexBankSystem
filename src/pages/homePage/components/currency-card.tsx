import iconBank from '../../../assets/currency-card/icon-bank.svg';
export const CurrencyCard = () => {
  return (
    <section className="currency-card">
      <section className="currency-card__section">
        <h2 className="currency-card__header">
          Exchange rate in internet bank
        </h2>
        <p className="currency-card__title">Currency</p>
        <ul className="currency-card__list">
          <li className="currency-card__item">
          </li>
          <li className="currency-card__item">
          </li>
          <li className="currency-card__item">
          </li>
          <li className="currency-card__item">
          </li>
          <li className="currency-card__item">
          </li>
          <li className="currency-card__item">
          </li>
        </ul>
        <p className="currency-card__subtext">All courses</p>
      </section>
      <aside className="currency-card__aside">
        <p>Update every 15 minutes, MSC 09.08.2022</p>
        <figure className="currency-card__figure">
          <img src={iconBank} alt="" />
        </figure>
      </aside>
    </section>
  );
};
