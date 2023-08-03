import { Level, WithId } from "src/types/base";
import { ITerm } from "./Terms/add/types";

export type ItemMode = "show" | "edit";

export interface ITermApi {
  id: string;
  level: Level;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

export interface ApiTermSchema {
  count: number;
  values: Array<ITermApi>;
}

export interface IAdminContext {
  terms: Array<WithId & ITerm> | undefined;
}
