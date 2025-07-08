export const getObjectOrError = <T>(value: unknown) => {
  if (typeof value === 'object' && value !== null) {
    return value as T;
  } else {
    throw new Error('Value is not a valid object');
  }
};

export const getStringOrError = (value: unknown) => {
  return typeof value === 'string' ? value : new Error('Value is not a string');
};

export const isHTML = (textCurrent: unknown) => {
    if (typeof textCurrent !== "string") {
        return false;
    }
    const domParser = new DOMParser();
    const dataText = domParser.parseFromString(textCurrent, "text/html");
    return dataText.body.textContent !== textCurrent;
}