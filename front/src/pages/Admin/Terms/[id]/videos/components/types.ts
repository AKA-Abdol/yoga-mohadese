import { WithId } from "src/types/base";
import { ITerm } from "../../../add/types";
import { IVideo, WithThumbnail } from "../types";
import * as Yup from "yup";

export type TermInfoProps = Omit<ITerm, "range"> & WithId;

export interface VideoItemProps {
  num: number;
  title: string;
  link: string;
  description?:string;
}

export interface AddVideoItemProps {
  onSubmit: (video: IVideo & WithThumbnail) => void;
  onCancel: () => void;
}

export const AddVideoSchema = Yup.object().shape({
  link: Yup.string()
    .matches(/^.+\.m3u8$/, "فایل اشتباه")
    .required("الزامی"),
  title: Yup.string().required("الزامی"),
  num: Yup.string().required("الزامی"),
  thumbnailLink: Yup.string()
    .matches(/^.+\.jpg$/, "فایل اشتباه")
    .required("الزامی"),
});
