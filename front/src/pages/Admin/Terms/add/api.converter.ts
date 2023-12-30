import { ITermInput } from "./types";

export const localTerm2api = (localTerm: ITermInput) => ({
  title: localTerm.title,
  level: +localTerm.level,
  start_date: localTerm.range[0].toDate().toISOString(),
  end_date: localTerm.range[1].toDate().toISOString(),
  description: localTerm.description,
  price: localTerm.price,
});
