import { ITerm } from "src/pages/Admin/Terms/add/types";
import { Level, WithId } from "src/types/base";

export interface ITermApi {
  id: string;
  level: Level;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  price: number;
}

export interface ApiTermSchema {
  count: number;
  values: Array<ITermApi>;
}

export interface IVideoContext {
  terms: Array<WithId & ITerm>;
  selected: {
    termId: string | undefined;
    sessionNum: number | undefined;
    termDescription: string | undefined;
    setTermId: (termId: string | undefined) => void;
    setSessionNum: (sessionNum: number | undefined) => void;
    setTermDescription: (termDescription: string | undefined) => void;
  };
}
