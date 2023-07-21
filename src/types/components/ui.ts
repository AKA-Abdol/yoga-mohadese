import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";

export interface WithChildren<T> {
  children: T;
}

export interface InputProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  placeholder: string;
  error?: string;
  id?: string;
  name: string;
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

export interface CardProps extends WithChildren<Array<ReactNode>> {
  flexDirection: "row" | "col";
  justify?: "center" | "between";
  classnames?: string;
}

export interface SelectProps {
  options: string[] | readonly string[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  classnames?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  optionsClassnames?: string;
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
