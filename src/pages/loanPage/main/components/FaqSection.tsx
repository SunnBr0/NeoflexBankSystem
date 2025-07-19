import { Accordion } from './Accordion';
import { words } from '../../../../lang/lang';
import { useState } from 'react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const handleToggle = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key));
  };

   const renderAccordions = (data: Record<string, string>) =>
    Object.entries(data).map(([header, content]) => {
      const key = header;
      return (
        <Accordion
          key={key}
          header={header}
          content={content}
          isOpen={openIndex === key}
          onToggle={() => handleToggle(key)}
        />
      );
    });

  return (
    <section className="credit-cards-faq">
      <section className="credit-cards-faq__item">
        <h2 className="credit-cards-faq__header">
          {words.loanPage.navigateBarCreditCards.UK.faq.issuing.header}
        </h2>
        {renderAccordions(words.loanPage.navigateBarCreditCards.UK.faq.issuing.accordion)}
      </section>

      <section className="credit-cards-faq__item">
        <h2 className="credit-cards-faq__header">
          {words.loanPage.navigateBarCreditCards.UK.faq.usage.header}
        </h2>
        {renderAccordions(words.loanPage.navigateBarCreditCards.UK.faq.usage.accordion)}
      </section>
    </section>
  );
};
