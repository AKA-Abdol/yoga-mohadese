export const makeTextShort = (text: string, len: number) => {
    let result = "";
    if (text.length > len) {
      result = `${text.slice(0, len)}...`;
    } else {
      result = text;
    }
    return result;
};

