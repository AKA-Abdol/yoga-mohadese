import { Level } from "src/types/base";

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
