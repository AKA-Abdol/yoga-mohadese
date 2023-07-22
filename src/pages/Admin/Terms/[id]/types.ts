import { Level } from "../add/types";

export interface IApiTerm {
  id: string;
  level: Level;
  title: string;
}

export interface IVideo {
  num: number;
  title: string;
  link: string;
}
