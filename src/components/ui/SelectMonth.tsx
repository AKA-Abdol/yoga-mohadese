import { FC } from "react";
import Select from "./Select";
import { SelectProps } from "@/types/components/ui";
import { PERSIAN_MONTHS } from "../../utils/dates";
import classNames from "classnames";

const SelectMonth: FC<Omit<SelectProps, "options">> = (props) => {
  return (
    <Select
      options={PERSIAN_MONTHS}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      name={props.name}
      classnames={props.classnames}
      placeholder={props.placeholder}
      optionsClassnames="text-xs"
    />
  );
};

export default SelectMonth;
