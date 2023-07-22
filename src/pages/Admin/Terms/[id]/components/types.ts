import { IVideo } from "../types";

export interface TermInfoProps {
  title: string;
  description: string;
}

export interface VideoItemProps {
  num: number;
  title: string;
  link: string;
}

export interface AddVideoItemProps {
  onSubmit: (video: IVideo) => void;
  onCancel: () => void;
}
