const e2p = (s: string | number) => {
  if (typeof s === "number") {
    s = s.toString();
  }
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};
const p2e = (s: string | number) => {
  if (typeof s === "number") {
    s = s.toString();
  }
  return s.replace(/[۰-۹]/g, (d) => `${"۰۱۲۳۴۵۶۷۸۹".indexOf(d)}`);
};

const insertDelimEveryThreeDigits = (
  s: string | number,
  delim: string = ","
): string => {
  if (typeof s === "number") {
    s = s.toString();
  }
  const reversedString = s.split("").reverse().join("");

  const regex = /\d{1,3}/g;
  const chunks = reversedString.match(regex) || [];
  const result = chunks.join(`${delim}`);

  // Reverse the result back
  return result.split("").reverse().join("");
};

const addToman = (s: string | number) => {
  if (typeof s === "number") {
    s = s.toString();
  }
  return `${s} تومان`;
};

const ordinalNumbers: string[] = [
  "اول",
  "دوم",
  "سوم",
  "چهارم",
  "پنجم",
  "ششم",
  "هفتم",
  "هشتم",
  "نهم",
  "دهم",
  "یازدهم",
  "دوازدهم",
  "سیزدهم",
  "چهاردهم",
  "پانزدهم",
  "شانزدهم",
  "هفدهم",
  "هجدهم",
  "نوزدهم",
  "بیستم",
];

const number2PersianOrdinal = (num: number): string => {
  return ordinalNumbers[num];
};

export {
  e2p as English2Persian,
  p2e as Persian2English,
  addToman,
  insertDelimEveryThreeDigits,
  number2PersianOrdinal,
};
