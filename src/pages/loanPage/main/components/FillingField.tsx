type TInput = 'input' | 'select';
type TFillingField = {
  header: string;
  placeholder: string;
  isRequiredAttribute?: boolean;
  type?: TInput;
};
export const FillingField = ({
  header,
  placeholder,
  isRequiredAttribute = false,
  type = 'input',
}: TFillingField) => {
  return (
    <section className="filling-field">
      <label className="filling-field__header" htmlFor="inputField">
        {header}
        {isRequiredAttribute && <span className="filling-field__star">*</span>}
      </label>
      {type === 'input' && (
        <input
          className="filling-field__input"
          type="text"
          id="inputField"
          placeholder={placeholder}
        />
      )}
      {type === 'select' && (
        <select className="filling-field__select" name="city" id="city-select">
          <option value="">Select term</option>
          <option value="6">6 month</option>
          <option value="12">12 month</option>
          <option value="18">18 month</option>
          <option value="24">24 month</option>
        </select>
      )}
    </section>
  );
};
