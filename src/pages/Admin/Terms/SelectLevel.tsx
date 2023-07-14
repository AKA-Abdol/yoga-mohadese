import { SelectProps } from "@/types/components/ui";
import Select from "../../../components/ui/Select";
import { FC } from "react";

const SelectLevel: FC<Omit<SelectProps, "options">> = (props) => {
  return (
    <Select
      options={["سطح A", "سطح B", "سطح C"]}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      name={props.name}
      classnames={props.classnames}
      placeholder={props.placeholder}
    />
  );
};

export default SelectLevel;
