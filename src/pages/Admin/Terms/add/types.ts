import { PersianMonth } from "src/utils/dates";

export type Level = "سطح A" | "سطح B" | "سطح C";

export interface ITerm {
  title: string;
  level: Level;
  sessionCount: string;
  month: PersianMonth | "";
  description: string;
}

export const TermInitialValues: ITerm = {
  title: "",
  level: "سطح A",
  sessionCount: "",
  month: "",
  description: "",
};
