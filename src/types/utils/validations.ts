export const PERSIAN_PHONE_NUMBER_SCHEMA =
  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

export const isPersianPhoneNumber = (s: string) =>
  PERSIAN_PHONE_NUMBER_SCHEMA.test(s);
