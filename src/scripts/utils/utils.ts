export const stringReduction = (value: string, maxLength: number) => {
  return value.length >= maxLength
    ? value.substring(0, maxLength) + '...'
    : value;
};

export const stringValidSum = (requestSum: number) => {
  const resultNumber = new Intl.NumberFormat('ru-RU').format(requestSum);
  return `${resultNumber} ₽`;
};
export const stringAmount = (requestSum: number) => {
  return new Intl.NumberFormat('ru-RU').format(requestSum);
};
