import { words } from '../../../../lang/lang';
import card1 from '../../../../assets/creditCard/card1.svg';

export const DigitalCreditCard = () => {
  const handleScrollToForm = () => {
    const section = document.getElementsByClassName(
      'credit-card-online-app'
    )[0];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="digital-credit-card">
      <section className="digital-credit-card__container">
        <h2 className="digital-credit-card__header">
          {words.loanPage.digitalCreditCard.UK.header}
        </h2>
        <p className="digital-credit-card__title">
          {words.loanPage.digitalCreditCard.UK.title}
        </p>
        <div className="digital-credit-card__advantage-container">
          {Object.entries(words.loanPage.digitalCreditCard.UK.advantages).map(
            ([header, title], index) => (
              <article
                key={`${title}-${index}`}
                className="digital-credit-card__advantage-text"
              >
                <h2>{header}</h2>
                <p>{title}</p>
              </article>
            )
          )}
        </div>
        <button
          className="digital-credit-card__button"
          onClick={handleScrollToForm}
        >
          {words.loanPage.digitalCreditCard.UK.button}
        </button>
      </section>
      <figure className="digital-credit-card__figure">
        <img src={card1} alt="" />
      </figure>
    </section>
  );
};
