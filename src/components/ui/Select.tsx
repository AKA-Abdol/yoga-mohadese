import classNames from "classnames";
import { FC } from "react";
import { SelectProps } from "src/types/components/ui";

const Select: FC<SelectProps> = (props) => {
  return (
    <select
      onChange={props.onChange}
      value={props.value ? props.value : props.placeholder}
      defaultValue={props.placeholder}
      className={classNames(
        "select appearance-none",
        "bg-primary-dark text-primary-light disabled:bg-primary-dark disabled:text-primary-light",
        props.classnames,
        props.error && "ring-2 ring-error"
      )}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
    >
      {props.placeholder && (
        <option
          disabled
          className={props.optionsClassnames}
          value={props.placeholder}
        >
          {props.placeholder}
        </option>
      )}
      {props.options.map((option, index) => (
        <option value={option}>{props.optionTexts[index]}</option>
      ))}
    </select>
  );
};

export default Select;
