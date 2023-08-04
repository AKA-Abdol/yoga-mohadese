import classNames from "classnames";
import { FC } from "react";
import HomeButton from "src/components/ui/HomeButton";
import { TermControllerProps } from "./types";
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
        <div className="h-1/4 w-full flex justify-center items-center">
          <TermSelect />
        </div>
        <div className="h-3/4 w-full">
          <TermData />
        </div>
      </div>
    </div>
  );
};

export default TermController;
