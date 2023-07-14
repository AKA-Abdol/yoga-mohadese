import * as Yup from "yup";

export interface TermItemProps {
  title: string;
}

export interface VideoButtonProps {
  onClick: () => void;
  classnames?: string;
}

export const termValidationSchema = Yup.object().shape({
  title: Yup.string().required("الزامی"),
  level: Yup.string().required("الزامی"),
  sessionCount: Yup.number()
    .integer("عدد صحیح وارد کنید")
    .min(1, "حداقل شامل ۱ جلسه")
    .required("الزامی"),
  month: Yup.string().required("الزامی"),
  description: Yup.string().required("الزامی"),
});
