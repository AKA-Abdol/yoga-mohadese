import { Level } from "src/types/base";
import { DateRange } from "src/types/components/ui";

export interface ITerm {
  title: string;
  level: Level;
  description: string;
  range: DateRange;
  price: number;
}

export interface ITermInput extends Omit<ITerm, "level"> {
  level: Level | "";
}

export const TermInitialValues: ITermInput = {
  title: "",
  level: "",
  description: "",
  range: [],
  price: 0,
};
