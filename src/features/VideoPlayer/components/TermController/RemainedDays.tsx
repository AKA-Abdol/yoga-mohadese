import classNames from "classnames";
import { FC } from "react";
import { RemainedDaysProps } from "./types";
import { English2Persian } from "src/utils/converts";

const RemainedDays: FC<RemainedDaysProps> = (props) => {
  return (
    <div className={classNames("w-full flex justify-center")}>
      <p className="text-3xl bg-primary-dark text-primary-light p-md rounded-md">
        {props.count
          ? `${English2Persian(`${props.count}`)} روز مانده`
          : "ترم انتخاب کنید"}
      </p>
    </div>
  );
};

export default RemainedDays;
