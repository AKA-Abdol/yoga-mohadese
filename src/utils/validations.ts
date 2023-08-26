import { removeWhitespace } from ".";

export const PERSIAN_PHONE_NUMBER_SCHEMA =
  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

const PERSIAN_ALPHABET_REGEX =
  /^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/;

export const isPersianPhoneNumber = (s: string) =>
  PERSIAN_PHONE_NUMBER_SCHEMA.test(s);

export const isPersianWord = (s: string) =>
  PERSIAN_ALPHABET_REGEX.test(removeWhitespace(s));
