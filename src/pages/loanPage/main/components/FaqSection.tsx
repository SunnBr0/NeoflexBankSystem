import { Accordion } from './Accordion';
import { words } from '../../../../lang/lang';

export const FaqSection = () => {
  return (
    <section className="credit-cards-faq">
      <section className="credit-cards-faq__item">
        <h2 className="credit-cards-faq__header">
          {words.loanPage.navigateBarCreditCards.UK.faq.issuing.header}
        </h2>
        {Object.entries(
          words.loanPage.navigateBarCreditCards.UK.faq.issuing.accordion
        ).map(([header, content], index) => (
          <Accordion
            key={`${header}-${index}`}
            header={header}
            content={content}
          />
        ))}
      </section>
      <section className="credit-cards-faq__item">
        <h2 className="credit-cards-faq__header">
          {words.loanPage.navigateBarCreditCards.UK.faq.usage.header}
        </h2>
        {Object.entries(
          words.loanPage.navigateBarCreditCards.UK.faq.usage.accordion
        ).map(([header, content], index) => (
          <Accordion
            key={`${header}-${index}`}
            header={header}
            content={content}
          />
        ))}
      </section>
    </section>
  );
};
