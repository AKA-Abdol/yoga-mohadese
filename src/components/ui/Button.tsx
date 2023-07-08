import { ButtonProps } from "@/types/components/ui";
import { FC, useCallback } from "react";

export const Button: FC<ButtonProps> = (props) => {
  const preventDefaultOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (props.onClick) props.onClick(event);
    },
    [props.onClick]
  );
  return (
    <button
      className={`btn btn-outline ${props.className}`}
      type={props.type}
      onClick={(event) => {
        preventDefaultOnClick(event);
      }}
    >
      {props.children}
    </button>
  );
};
