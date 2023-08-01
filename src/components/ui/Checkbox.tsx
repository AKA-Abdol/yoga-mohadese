import classNames from "classnames";
import { FC } from "react";
import { CheckboxProps } from "src/types/components/ui";

const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <label
      className={classNames(
        "label",
        props.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        props.hasSpan && !props.span && "hidden"
      )}
    >
      {props.span && (
        <span className="label-text mx-sm text-primary-dark text-center">
          {props.span}
        </span>
      )}
      <input
        type="checkbox"
        className={classNames(
          "checkbox disabled:opacity-60",
          `checkbox-${props.size}`,
          props.className,
          "border-primary-dark"
        )}
        checked={props.checked}
        onChange={props.onToggle}
        disabled={props.disabled}
      />
    </label>
  );
};

export default Checkbox;
