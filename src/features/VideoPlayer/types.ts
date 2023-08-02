import { ITerm } from "src/pages/Admin/Terms/add/types";
import { Level, WithId } from "src/types/base";

export interface ITermApi {
  id: string;
  level: Level;
  title: string;
  description: string;
  start_data: string;
  end_date: string;
}

export interface ApiTermSchema {
  count: number;
  values: Array<ITermApi>;
}

export interface IVideoContext {
  terms: Array<WithId & ITerm> | undefined;
}
