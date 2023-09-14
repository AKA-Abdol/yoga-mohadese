import { FC } from "react";
import Select from "./Select";
import { PERSIAN_MONTHS } from "../../utils/dates";
import { SelectProps } from "src/types/components/ui";

const SelectMonth: FC<Omit<SelectProps, "options">> = (props) => {
  return (
    <Select
      options={PERSIAN_MONTHS}
      optionTexts={PERSIAN_MONTHS}
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
