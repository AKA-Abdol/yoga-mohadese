import classNames from "classnames";
import { FC } from "react";
import HomeButton from "src/components/ui/HomeButton";
import RemainedDays from "./RemainedDays";

const TermController: FC = (props) => {
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
        <p className="text-4xl">سلام کاربر محدثه</p>
      </div>
      <div className={classNames("w-full h-full")}></div>
      <RemainedDays count={14} />
    </div>
  );
};

export default TermController;
