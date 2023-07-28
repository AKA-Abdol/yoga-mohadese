import { Level } from "src/types/base";
import { DateRange } from "src/types/components/ui";

export interface ITerm {
  title: string;
  level: Level;
  description: string;
  range: DateRange;
}

export const TermInitialValues: ITerm = {
  title: "",
  level: "1",
  description: "",
  range: [],
};
