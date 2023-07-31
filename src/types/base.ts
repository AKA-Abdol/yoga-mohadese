import { PERSIAN_MONTHS } from "src/utils/dates";

export interface ContentPair<T> {
  content: string;
  data: T;
}

export interface WithId {
  id: string;
}

export type PersianMonth = (typeof PERSIAN_MONTHS)[number];

export const LEVELS = ["1", "2", "3"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_TITLES = ["مقدماتی", "متوسط", "پیشرفته"];

export interface WithId {
  id: string;
}
