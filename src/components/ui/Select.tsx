import { SelectProps } from "@/types/components/ui";
import classNames from "classnames";
import { FC } from "react";

const Select: FC<SelectProps> = (props) => {
  return (
    <select
      onChange={props.onChange}
      value={props.value}
      className={classNames(
        "select",
        "bg-primary-dark text-primary-light disabled:bg-primary-dark disabled:text-primary-light",
        props.classnames
      )}
      disabled={props.disabled}
    >
      {props.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
