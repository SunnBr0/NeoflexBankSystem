import card1 from '../../../../assets/creditCard/card1.svg';
import card2 from '../../../../assets/creditCard/card2.svg';
import card3 from '../../../../assets/creditCard/card3.svg';
import card4 from '../../../../assets/creditCard/card4.svg';
import { words } from '../../../../lang/lang';
export const CreditCard = () => {
  const arrCard = [card1, card2, card3, card4];
  return (
    <section className="credit-card">
      <section className="credit-card__section">
        <h2 className="credit-card__header">
          {words.homePage.creditCard.UK.header}
        </h2>
        <button className="credit-card__button">
          {words.homePage.creditCard.UK.button}
        </button>
      </section>
      <aside className="credit-card__list">
        {arrCard.map((item, index) => (
          <figure key={`${item}-${index}`} className="credit-card__item">
            <img src={item} alt={`card${index}`} />
          </figure>
        ))}
      </aside>
    </section>
  );
};
