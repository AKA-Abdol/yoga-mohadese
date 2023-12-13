import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";


export const PERSIAN_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
] as const;

export const PERSIAN_WEEKDAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

export const dateDiff = (first: Date, second: Date) => {
  return Math.round(
    Math.abs(second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
  );
};

export const isoStringDateDiff = (first: string, second: string) => {
  return dateDiff(new Date(first), new Date(second));
};

export const isoStringDateDiffFromNow = (second: string) => {
  return dateDiff(new Date(), new Date(second));
}

export const getJalaliMonthName = (isoDateString: string) => {
  const date = new DateObject(isoDateString);
  const jalaliDate = date.convert(persian, persian_fa);
  const monthName = jalaliDate.format("MMMM");
  return monthName;
};