import classNames from "classnames";
import { FC } from "react";
import { DrawerProps } from "../types";

const Drawer: FC<DrawerProps> = (props) => {
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 mx-auto z-10",
        "w-full h-full",
        "transition-all duration-500 ease-in-out",
        "bg-primary-light text-primary-dark",
        props.show ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      {props.children}
    </div>
  );
};

export default Drawer;
