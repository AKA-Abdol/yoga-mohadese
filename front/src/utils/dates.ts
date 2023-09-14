import DateObject from "react-date-object";

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
