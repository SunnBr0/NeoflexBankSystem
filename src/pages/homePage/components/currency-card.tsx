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
            <h3>USD:</h3>
            <p>60.78</p>
          </li>
          <li className="currency-card__item">
            <h3>CNY:</h3>
            <p>9.08</p>
          </li>
          <li className="currency-card__item">
            <h3>CHF:</h3>
            <p>64.78</p>
          </li>
          <li className="currency-card__item">
            <h3>USD:</h3>
            <p>60.78</p>
          </li>
          <li className="currency-card__item">
            <h3>JPY:</h3>
            <p>0.46</p>
          </li>
          <li className="currency-card__item">
            <h3>TRY:</h3>
            <p>3.39</p>
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
