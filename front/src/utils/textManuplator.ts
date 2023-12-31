export const makeTextShort = (text: string, len: number) => {
    let result = "";
    console.log(text.length);
    
    if (text.length > len) {
      result = `${text.slice(0, len)}...`;
    } else {
      result = text;
    }
    return result;
};

