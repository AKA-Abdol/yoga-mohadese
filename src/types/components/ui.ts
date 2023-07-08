import { HTMLInputTypeAttribute } from "react";

export interface WithChildren<T> {
  children: T;
}

export interface InputProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
  onChange: () => void;
  placeholder: string;
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
