import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { words } from '../../../../lang/lang';
import { FillingField } from './FillingField';
import type { TFormValues } from '../../../../scripts/utils/type';

type TProps = {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors;
};
export const SectionFilingFields = ({ register, errors }: TProps) => {
  return (
    <section className="credit-card-online-app__container-down-half__fields">
      <FillingField
        name="lastName"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.lastName.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.lastName.placeHolder
        }
        isRequiredAttribute={true}
        register={register('lastName', { required: 'Last name is required' })}
        error={errors.lastName?.message as string}
      />
      <FillingField
        name="firstName"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.firstName.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.firstName.placeHolder
        }
        isRequiredAttribute={true}
        register={register('firstName', { required: 'First name is required' })}
        error={errors.firstName?.message as string}
      />
      <FillingField
        name="middleName"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.patronymic.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.patronymic.placeHolder
        }
        register={register('middleName')}
      />
      <FillingField
        name="term"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.select.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.select.placeHolder
        }
        isRequiredAttribute={true}
        type="select"
        register={register('term', { required: 'Please select a term' })}
        error={errors.term?.message as string}
      />
      <FillingField
        name="email"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.email.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.email.placeHolder
        }
        isRequiredAttribute={true}
        register={register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/, message: 'Invalid email format' },
        })}
        error={errors.email?.message as string}
      />
      <FillingField
        name="birthdate"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.dateBirth.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.dateBirth.placeHolder
        }
        isRequiredAttribute={true}
        register={register('birthdate', { required: 'Birthdate is required' })}
        error={errors.birthdate?.message as string}
        type='date'
      />
      <FillingField
        name="passportSeries"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.passportSeries.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.passportSeries.placeHolder
        }
        isRequiredAttribute={true}
        register={register('passportSeries', {
          required: 'Series is required',
        })}
        error={errors.passportSeries?.message as string}
      />
      <FillingField
        name="passportNumber"
        header={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.passportNumber.header
        }
        placeholder={
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .fillingFields.passportNumber.placeHolder
        }
        isRequiredAttribute={true}
        register={register('passportNumber', {
          required: 'Number is required',
        })}
        error={errors.passportNumber?.message as string}
      />
    </section>
  );
};
