import { words } from '../../../../lang/lang';

export const RatesConditions = () => {
  return (
    <section className="credit-cards-rates-conditions">
      <ul className="credit-cards-rates-conditions__list">
        {Object.entries(
          words.loanPage.navigateBarCreditCards.UK.ratesConditions
        ).map(([header, title], index) => (
          <li
            key={`${header}-${index}`}
            className="credit-cards-rates-conditions__item"
          >
            <h2>{header}</h2>
            {title.length == 2 ? (
              <p>
                {title[0]}
                <br />
                {title[1]}
              </p>
            ) : (
              <p>{title}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
