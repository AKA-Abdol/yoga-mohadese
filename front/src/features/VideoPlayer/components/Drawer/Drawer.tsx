import classNames from "classnames";
import { FC } from "react";
import { DrawerProps } from "../types";

const Drawer: FC<DrawerProps> = (props) => {
  return (
    <div
      className={classNames(
        "w-full overflow-y-auto ",
        "transition-all duration-500 ease-in-out",
        "bg-primary-light text-brown",
        props.show
          ? "absolute visible opacity-100 z-10 h-auto "
          : "fixed top-0 left-0 right-0 mx-auto invisible opacity-0 z-auto h-screen"
      )}
    >
      {props.children}
    </div>
  );
};

export default Drawer;
