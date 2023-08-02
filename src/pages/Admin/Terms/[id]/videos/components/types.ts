import { WithId } from "src/types/base";
import { ITerm } from "../../../add/types";
import { IVideo, WithThumbnail } from "../types";

export type TermInfoProps = Omit<ITerm, "range"> & WithId;

export interface VideoItemProps {
  num: number;
  title: string;
  link: string;
}

export interface AddVideoItemProps {
  onSubmit: (video: IVideo & WithThumbnail) => void;
  onCancel: () => void;
}
