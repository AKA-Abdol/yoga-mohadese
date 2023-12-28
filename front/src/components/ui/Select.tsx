import classNames from "classnames";
import { FC } from "react";
import { SelectProps } from "src/types/components/ui";
import styles from "./Select.module.css";

const Select: FC<SelectProps> = (props) => {
  return (
    <select
      onChange={props.onChange}
      value={props.value ? props.value : props.placeholder}
      // defaultValue={props.placeholder}
      className={classNames(
        "select",
        "bg-primary-light text-primary-dark disabled:bg-primary-light disabled:text-primary-dark",
        props.classnames,
        props.error && "ring-2 ring-error",
        styles.mobile_appearance
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
        <option
          className={props.optionsClassnames}
          value={option}
          key={`${option}-${props.id}`}
        >
          {props.optionTexts[index]}
        </option>
      ))}
    </select>
  );
};

export default Select;
