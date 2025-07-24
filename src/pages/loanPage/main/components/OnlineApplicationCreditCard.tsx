import { useState } from 'react';
import { words } from '../../../../lang/lang';
import { stringValidSum } from '../../../../scripts/utils/utils';
import { SliderAmount } from './SliderAmount';
import { SectionFilingFields } from './SectionFilingFields';
import { useForm } from 'react-hook-form';
import type { TFormValues } from '../../../../scripts/utils/type';
import { sendForm } from '../../../../scripts/requets/sendForm';
import { setApplicationData } from '../../../../store/application/applicationSlice';
import { useDispatch } from 'react-redux';

export const OnlineApplicationCreditCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<TFormValues>({
    defaultValues: {
      amount: 150000,
    },
  });
  const amount = watch('amount');
  const [rawValue, setRawValue] = useState(amount);
  const [isFormatted, setIsFormatted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    setValue('amount', Number(digits));
    setRawValue(Number(digits));
    setIsFormatted(false);
  };

  const handleBlur = () => {
    setIsFormatted(true);
  };

  const onSubmit = async (data: TFormValues) => {
    setIsLoading(true);
    try {
      if (!data.middleName || data.middleName.length === 0) {
        data.middleName = null;
      }
      const response = await sendForm(data);
      dispatch(setApplicationData(response.data));
    } catch (error) {
      console.error(' Error submitting:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return !isLoading ? (
    <form onSubmit={handleSubmit(onSubmit)} className="credit-card-online-app">
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
          <SliderAmount
            amount={rawValue}
            onChangeAmount={(val) => {
              setRawValue(val);
              setValue('amount', val);
            }}
          />
        </section>
        <section className="credit-card-online-app__container-right-part">
          <h2>
            {
              words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
                .headerInput
            }
          </h2>
          <input
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
        <SectionFilingFields
          register={register}
          errors={errors}
          formSubmitted={isSubmitted}
        />

        <button
          type="submit"
          className="credit-card-online-app__container-down-half__button"
        >
          {
            words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
              .button
          }
        </button>
      </section>
    </form>
  ) : (
    <div className="loader-container">LOADING</div>
  );
};
