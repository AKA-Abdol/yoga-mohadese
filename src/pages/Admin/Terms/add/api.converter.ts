import { ITerm } from "./types";

export const localTerm2api = (localTerm: ITerm) => ({
  ...localTerm,
  level: 2,
  start_date: new Date(),
  end_date: new Date(),
});
