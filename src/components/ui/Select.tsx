import { SelectProps } from "@/types/components/ui";
import { FC } from "react";

const Select: FC<SelectProps> = (props) => {
  return (
    <select onChange={props.onChange} value={props.value}>
      {props.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
