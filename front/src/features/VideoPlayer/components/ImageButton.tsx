import { FC } from "react";
import { ImageButtonProps } from "./types";
import classNames from "classnames";

const ImageButton: FC<ImageButtonProps> = (props) => {
  return (
    <button
      className={`w-full flex flex-col items-center ${props.className}`}
      onClick={props.onClick}
    >
      <img
        src={props.src}
        alt={props.alt}
        className={`h-auto w-full object-contain`}
      />
      <p
        className={classNames(
          "text-xs text-primary-light",
          !props.subtitle && "hidden"
        )}
      >
        {props.subtitle}
      </p>
    </button>
  );
};

export default ImageButton;
