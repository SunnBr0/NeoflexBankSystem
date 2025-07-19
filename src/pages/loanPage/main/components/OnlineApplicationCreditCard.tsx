import { useRef, useState } from 'react';
import { words } from '../../../../lang/lang';
import { stringValidSum } from '../../../../scripts/utils/utils';
import { SliderAmount } from './SliderAmount';
import { SectionFilingFields } from './SectionFilingFields';

// type TFormValues = {
//   amount: 'number';
//   term: 'number';
//   firstName: 'string';
//   lastName: 'string';
//   middleName: 'string | null';
//   email: 'string';
//   birthdate: 'string | Date';
//   passportSeries: 'string';
//   passportNumber: 'string';
// };

export const OnlineApplicationCreditCard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [rawValue, setRawValue] = useState(150000);
  const [isFormatted, setIsFormatted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    setRawValue(Number(digits));
    setIsFormatted(false);
  };

  const handleBlur = () => {
    setIsFormatted(true);
  };
  return (
    <section className="credit-card-online-app">
      <section className="credit-card-online-app__container-up-half">
        <section className="credit-card-online-app__container-left-part">
          <div className="credit-card-online-app__container-header">
            <h2>
              {
                words.loanPage.processGetCreditCard.UK
                  .onlineApplicationCreditCard.header
              }
            </h2>
            <p>
              {
                words.loanPage.processGetCreditCard.UK
                  .onlineApplicationCreditCard.headerStep
              }
            </p>
          </div>
          <SliderAmount amount={rawValue} onChangeAmount={setRawValue} />
        </section>
        <section className="credit-card-online-app__container-right-part">
          <h2>
            {
              words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
                .headerInput
            }
          </h2>
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={isFormatted ? stringValidSum(Number(rawValue)) : rawValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="amount"
          />
        </section>
      </section>
      <section className="credit-card-online-app__container-down-half">
        <h2 className="credit-card-online-app__container-down-half__header">
          {
            words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
              .headerSectionsInput
          }
        </h2>
        <SectionFilingFields />
        <button className="credit-card-online-app__container-down-half__button">
          {
            words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
              .button
          }
        </button>
      </section>
    </section>
  );
};
