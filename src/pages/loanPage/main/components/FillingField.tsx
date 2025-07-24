import type { UseFormRegisterReturn } from 'react-hook-form';
import checkFill from '../../../../assets/cardOffer/checkFill.svg';
import closeRoundFill from '../../../../assets/cardOffer/closeRoundFill.svg';
import { useState } from 'react';

type TInput = 'input' | 'select' | 'date';
type TFillingField = {
  name: string;
  header: string;
  placeholder: string;
  isRequiredAttribute?: boolean;
  type?: TInput;
  register: UseFormRegisterReturn;
  error?: string | undefined;
  formSubmitted: boolean;
};

export const FillingField = ({
  name,
  header,
  placeholder,
  isRequiredAttribute = false,
  type = 'input',
  register,
  error,
  formSubmitted,
}: TFillingField) => {
  const [value, setValue] = useState('');

  const showGreenIcon = formSubmitted && !error;
  const showRedIcon = formSubmitted && error;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    register.onChange(e);
    setValue(e.target.value);
  };
  const handleOnlyDigits = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Delete',
    ];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <section className="filling-field">
      <label className="filling-field__header" htmlFor={name}>
        {header}
        {isRequiredAttribute && <span className="filling-field__star">*</span>}
      </label>
      {type === 'input' && (
        <>
          <input
            className={`filling-field__input ${error ? 'filling-field--error' : ''}`}
            type="text"
            id={name}
            placeholder={placeholder}
            {...register}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (name === 'passportSeries' || name === 'passportNumber') {
                handleOnlyDigits(e);
              }
              if (
                (name === 'lastName' ||
                  name === 'firstName' ||
                  name === 'middleName' ||
                  name === 'email') &&
                e.key === ' '
              ) {
                e.preventDefault();
              }
            }}
          />
          {showRedIcon && (
            <figure className="filling-field__icon">
              <img src={closeRoundFill} alt="Invalid" />
            </figure>
          )}
        </>
      )}
      {type === 'select' && (
        <select
          className={`filling-field__select ${error ? 'filling-field--error' : ''}`}
          {...register}
          id={name}
          onChange={handleChange}
        >
          <option value="">Select term</option>
          <option value="6">6 month</option>
          <option value="12">12 month</option>
          <option value="18">18 month</option>
          <option value="24">24 month</option>
        </select>
      )}
      {type === 'date' && (
        <>
          <input
            className={`filling-field__input ${error ? 'filling-field--error' : ''}`}
            type="date"
            id={name}
            {...register}
            onChange={handleChange}
          />
          {showRedIcon && (
            <figure className="filling-field__icon">
              <img src={closeRoundFill} alt="Invalid" />
            </figure>
          )}
        </>
      )}

      {name === 'middleName' && value.length === 0 ? (
        <></>
      ) : (
        showGreenIcon && (
          <figure className="filling-field__icon">
            <img src={checkFill} alt="Valid" />
          </figure>
        )
      )}

      {showRedIcon && <p className="filling-field__text-error">{error}</p>}
    </section>
  );
};
