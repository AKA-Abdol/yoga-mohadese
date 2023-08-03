import classNames from "classnames";
import { FC } from "react";
import HomeButton from "src/components/ui/HomeButton";
import RemainedDays from "./RemainedDays";
import { TermControllerProps } from "./types";
import SessionList from "../SessionList";
import TermSelect from "./TermSelect";
import TermData from "./TermData";

const TermController: FC<TermControllerProps> = (props) => {
  return (
    <div
      className={classNames(
        "w-full h-full",
        "flex flex-col items-center space-y-sm",
        "text-primary-dark",
        "py-sm"
      )}
    >
      <div className="flex flex-row justify-end w-full px-sm">
        <HomeButton />
      </div>
      <div className={classNames("w-full flex justify-center")}>
        <p className="text-4xl">{props.title}</p>
      </div>
      <div className={classNames("w-full h-full")}>
        <div className="h-1/3 w-full flex justify-center items-center">
          <TermSelect />
        </div>
        <div className="h-2/3 w-full">
          <TermData />
        </div>
      </div>
    </div>
  );
};

export default TermController;
