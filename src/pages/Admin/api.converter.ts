import { WithId } from "src/types/base";
import { ITerm } from "./Terms/add/types";
import { ITermApi } from "./types";
import DateObject from "react-date-object";

export const apiTerm2local = (term: ITermApi): WithId & ITerm => ({
  id: term.id,
  description: term.description,
  level: term.level,
  title: term.title,
  range: [new DateObject(term.start_data), new DateObject(term.end_date)],
});
