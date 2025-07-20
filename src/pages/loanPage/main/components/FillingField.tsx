import type { UseFormRegisterReturn } from 'react-hook-form';

type TInput = 'input' | 'select' | 'date';
type TFillingField = {
  name: string;
  header: string;
  placeholder: string;
  isRequiredAttribute?: boolean;
  type?: TInput;
  register: UseFormRegisterReturn;
  error?: string | undefined;
};
export const FillingField = ({
  name,
  header,
  placeholder,
  isRequiredAttribute = false,
  type = 'input',
  register,
  error,
}: TFillingField) => {


  return (
    <section className="filling-field">
      <label className="filling-field__header" htmlFor={name}>
        {header}
        {isRequiredAttribute && <span className="filling-field__star">*</span>}
      </label>
      {type === 'input' && (
        <input
          className={`filling-field__input ${error ? 'filling-field--error' : ''}`}
          type="text"
          id={name}
          placeholder={placeholder}
          {...register}
        />
      )}
      {type === 'select' && (
        <select
          className={`filling-field__select ${error ? 'filling-field--error' : ''}`}
          {...register}
          id={name}
        >
          <option value="">Select term</option>
          <option value="6">6 month</option>
          <option value="12">12 month</option>
          <option value="18">18 month</option>
          <option value="24">24 month</option>
        </select>
      )}
      {type === 'date' && (
        <input
          className={`filling-field__input ${error ? 'filling-field--error' : ''}`}
          type="date"
          id={name}
          {...register}
        />
      )}

      {error && <p className="filling-field__text-error">{error}</p>}
    </section>
  );
};
