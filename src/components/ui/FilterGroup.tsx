import { FC, ReactNode } from "react";
import Button from "./Button";
import classNames from "classnames";
import { FilterGroupProps } from "./FilterGroup.types";

const FilterGroup = <T extends ReactNode>(props: FilterGroupProps<T>) => {
  return (
    <div className="flex flex-row justify-center w-full px-sm">
      {props.filterNames.map((filter, index) => (
        <Button
          className={classNames(
            "btn-primary-theme w-1/3",
            props.activeFilter === props.filterValues[index] &&
              "btn-primary-active",
            index && "mr-sm"
          )}
          onClick={() => props.setFilter(props.filterValues[index])}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterGroup;
