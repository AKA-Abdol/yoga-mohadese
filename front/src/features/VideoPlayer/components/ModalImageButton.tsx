import { FC } from "react";
import { ModalImageButtonProps } from "./types";
import classNames from "classnames";

const ModalImageButton: FC<ModalImageButtonProps> = (props) => {
  return (
    <label className="w-full flex flex-col items-center cursor-pointer" htmlFor={props.id}>
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
    </label>
  );
};

export default ModalImageButton;
