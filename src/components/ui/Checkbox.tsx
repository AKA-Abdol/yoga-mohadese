import classNames from "classnames";
import { FC } from "react";
import { CheckboxProps } from "src/types/components/ui";

const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <label className="label cursor-pointer">
      {props.span && (
        <span className="label-text mx-sm text-primary-dark">{props.span}</span>
      )}
      <input
        type="checkbox"
        className={classNames(
          "checkbox checkbox-success",
          `checkbox-${props.size}`,
          props.className,
          "border-primary-dark"
        )}
        checked={props.checked}
        onChange={props.onToggle}
      />
    </label>
  );
};

export default Checkbox;
