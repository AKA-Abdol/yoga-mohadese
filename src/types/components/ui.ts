import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";
import DateObject from "react-date-object";

export interface WithChildren<T> {
  children: T;
}

export interface InputProps {
  className?: string;
  containerClassName?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  placeholder: string;
  error?: string;
  id?: string;
  name: string;
  errorBorderOnly?: boolean;
}

export interface ButtonProps extends WithChildren<ReactNode> {
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AttentionSpanProps extends WithChildren<string> {
  className?: string;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  buttonNames: Array<string>;
  data: Array<ReactNode>;
  routes: Array<string>;
}

export interface CardProps extends WithChildren<Array<ReactNode> | ReactNode> {
  flexDirection: "row" | "col";
  justify?: "center" | "between";
  classnames?: string;
  onClick?: () => void;
}

export interface SelectProps {
  optionTexts: string[] | readonly string[];
  options: any[] | readonly any[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  classnames?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  optionsClassnames?: string;
  error?: string;
}

export interface SubmitCancelButtonProps {
  classnames?: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export interface DeleteButtonProps {
  onClick: () => void;
  classnames?: string;
}

export type LinkButtonProps = Partial<DeleteButtonProps>;

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  textColor?: string;
}

export type DateRange = Array<DateObject>;
export interface RangePickerProps {
  value: DateRange;
  onChange: (newRange: DateRange) => void;
}

export interface BadgeProps extends WithChildren<string> {
  className?: string;
}

export interface ModalProps extends WithChildren<ReactNode> {
  onClose: () => void;
  show: boolean;
}

export interface CheckboxProps {
  onToggle?: () => void;
  className?: string;
  span?: string;
  size?: "xs" | "sm" | "md" | "lg";
  checked?: boolean;
  disabled?: boolean;
  hasSpan?: boolean;
}
