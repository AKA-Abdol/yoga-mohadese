import classNames from "classnames";
import { FC } from "react";
import { SelectProps } from "src/types/components/ui";

const Select: FC<SelectProps> = (props) => {
  return (
    <select
      onChange={props.onChange}
      value={!props.placeholder ? props.value : undefined}
      defaultValue={props.placeholder}
      className={classNames(
        "select",
        "bg-primary-dark text-primary-light disabled:bg-primary-dark disabled:text-primary-light",
        props.classnames
      )}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
    >
      {props.placeholder && (
        <option disabled className={props.optionsClassnames}>
          {props.placeholder}
        </option>
      )}
      {props.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
