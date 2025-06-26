export const isHTML = (textCurrent) => {
    const domParser = new DOMParser();
    const dataText = domParser.parseFromString(textCurrent, "text/html");
    return dataText.body.textContent !== textCurrent;
}

export const correntDescription = (description) => {
    return description.length >= 140 ? description.substring(0, 140) + "..." : description;
}