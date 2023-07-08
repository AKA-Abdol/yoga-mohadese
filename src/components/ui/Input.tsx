import { InputProps } from "@/types/components/ui";
import { FC } from "react";

export const Input: FC<InputProps> = (props) => {
  return (
    <input
      className={`input input-md bg-inherit ${props.className}`}
      type={props.type ?? "text"}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};
