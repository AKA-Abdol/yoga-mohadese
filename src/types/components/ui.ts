import { ChangeEvent, HTMLInputTypeAttribute } from "react";

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

export interface ButtonProps extends WithChildren<string> {
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AttentionSpanProps extends WithChildren<string> {
  className?: string;
  onClick?: () => void;
}
