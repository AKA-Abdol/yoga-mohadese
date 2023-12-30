import { WithId } from "src/types/base";

export interface IVideo {
  num: number;
  title: string;
  description: string;
  link: string;
}

export interface WithThumbnail {
  thumbnail: string;
}

export interface WithVideos {
  videos: Array<IVideo & WithId & WithThumbnail>;
}

export type AddStateType = "adding" | "readyToAdd";
