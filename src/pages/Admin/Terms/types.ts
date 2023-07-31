import { WithId } from "src/types/base";
import { ModalProps } from "src/types/components/ui";
import * as Yup from "yup";
import { ITerm } from "./add/types";

export type TermItemProps = ITerm & WithId;

export interface VideoButtonProps {
  onClick?: () => void;
  classnames?: string;
}

export const termValidationSchema = Yup.object().shape({
  title: Yup.string().required("الزامی"),
  level: Yup.string().required("الزامی"),
  description: Yup.string().required("الزامی"),
  range: Yup.array().min(2, "بازه انتخاب کنید").required("الزامی"),
});

export interface DeleteModalProps extends Omit<ModalProps, "children"> {
  term: TermItemProps;
}

export interface IDeleteModalState {
  show: boolean;
  term: TermItemProps;
}

export const initialDeleteModalState: IDeleteModalState = {
  show: false,
  term: {
    id: "",
    level: "1",
    title: "",
    description: "",
    range: [],
  },
};
