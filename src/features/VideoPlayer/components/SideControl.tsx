import classNames from "classnames";
import { FC } from "react";

const SideControl: FC = () => {
  return (
    <div
      className={classNames(
        "h-full flex flex-col justify-center items-center",
        "w-20",
        "absolute right-0 top-0"
      )}
    >
        <p>this is here</p>
    </div>
  );
};

export default SideControl;
