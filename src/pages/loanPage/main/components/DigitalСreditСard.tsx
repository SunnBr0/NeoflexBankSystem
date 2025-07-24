import { words } from '../../../../lang/lang';
import card1 from '../../../../assets/creditCard/card1.svg';
import { Tooltip } from './Tooltip';
import { useState } from 'react';

export const DigitalCreditCard = () => {
  const handleScrollToForm = () => {
    const section = document.getElementsByClassName(
      'credit-card-online-app'
    )[0];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [showDaysTooltip, setShowDaysTooltip] = useState(false);
  const [showRubTooltip, setShowRubTooltip] = useState(false);
  const [showZeroTooltip, setShowZeroTooltip] = useState(false);
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
          <article
            className="digital-credit-card__advantage-text"
            onMouseEnter={() => setShowDaysTooltip(true)}
            onMouseLeave={() => setShowDaysTooltip(false)}
          >
            <h2>{words.loanPage.digitalCreditCard.UK.advantagesKeyDays}</h2>
            <p>{words.loanPage.digitalCreditCard.UK.advantagesValueDays}</p>
            {showDaysTooltip && (
              <Tooltip text={words.loanPage.digitalCreditCard.UK.TooltipDays} />
            )}
          </article>
          <article
            className="digital-credit-card__advantage-text"
            onMouseEnter={() => setShowRubTooltip(true)}
            onMouseLeave={() => setShowRubTooltip(false)}
          >
            <h2>{words.loanPage.digitalCreditCard.UK.advantagesKeyRub}</h2>
            <p>{words.loanPage.digitalCreditCard.UK.advantagesKeyRub}</p>
            {showRubTooltip && (
              <Tooltip text={words.loanPage.digitalCreditCard.UK.TooltipRub} />
            )}
          </article>
          <article
            className="digital-credit-card__advantage-text"
            onMouseEnter={() => setShowZeroTooltip(true)}
            onMouseLeave={() => setShowZeroTooltip(false)}
          >
            <h2>{words.loanPage.digitalCreditCard.UK.advantagesKeyZero}</h2>
            <p>{words.loanPage.digitalCreditCard.UK.advantagesValueZero}</p>
            {showZeroTooltip && (
              <Tooltip text={words.loanPage.digitalCreditCard.UK.TooltipZero} />
            )}
          </article>
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
