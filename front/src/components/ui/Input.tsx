import classNames from "classnames";
import { FC } from "react";
import { InputProps } from "src/types/components/ui";

const Input: FC<InputProps> = (props) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center space-y-1",
        props.containerClassName
      )}
    >
      <input
        className={`input input-md bg-inherit ${props.className} ${
          props.error && "border-error"
        }`}
        type={props.type ?? "text"}
        onChange={props.onChange}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <p
        className={classNames(
          "text-xs text-error font-bold",
          !props.errorBorderOnly && props.error ? "block" : "hidden"
        )}
      >
        {props.error}
      </p>
    </div>
  );
};

export default Input;
