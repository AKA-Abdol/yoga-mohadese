import { Level } from "src/types/base";
import * as Yup from "yup";

export interface TermItemProps {
  title: string;
  id: string;
  level: Level;
}

export interface VideoButtonProps {
  onClick: () => void;
  classnames?: string;
}

export const termValidationSchema = Yup.object().shape({
  title: Yup.string().required("الزامی"),
  level: Yup.string().required("الزامی"),
  description: Yup.string().required("الزامی"),
  range: Yup.array().min(2, "بازه انتخاب کنید").required("الزامی"),
});
