import classNames from "classnames";
import { FC } from "react";

const OpenCloseButton: FC<{
  defaultShow: boolean;
  onToggle: () => void;
}> = (props) => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={props.onToggle} />

      <svg
        className={classNames(
          "w-12 duration-500",
          props.defaultShow
            ? "swap-on fill-primary-light"
            : "swap-off fill-primary-dark"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      <svg
        className={classNames(
          "w-12 duration-500",
          props.defaultShow
            ? "swap-off fill-primary-dark"
            : "swap-on fill-primary-light"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};

export default OpenCloseButton;
