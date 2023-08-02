import { SelectProps } from "src/types/components/ui";
import Select from "../../../components/ui/Select";
import { FC } from "react";
import { LEVELS, LEVEL_TITLES } from "src/types/base";

const SelectLevel: FC<Omit<SelectProps, "options" | "optionTexts">> = (
  props
) => {
  return (
    <Select
      optionTexts={LEVEL_TITLES}
      options={LEVELS}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      name={props.name}
      classnames={props.classnames}
      placeholder={props.placeholder}
      error={props.error}
    />
  );
};

export default SelectLevel;
