import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "avatar ml-md flex flex-col items-center space-y-sm cursor-pointer",
        "py-sm px-sm rounded-lg",

        videoContext.selected.sessionNum === props.data.num
          ? "border-lg border-error-400"
          : "border-normal border-primary-light"
      )}
      onClick={() => {
        videoContext.selected.setSessionNum(props.data.num);
        drawerContext.onClose();
      }}
    >
      <p
        className={`text-lg text-primary-light`}
      >{`ویدیو شماره ${props.data.num}`}</p>
      <div className="h-full mask mask-squircle">
        <img src={props.data.thumbnail} alt="thumbnail" />
      </div>
      <p className="text-xs text-primary-light text-center">
        {props.data.title}
      </p>
    </div>
  );
};

export default SessionItem;
