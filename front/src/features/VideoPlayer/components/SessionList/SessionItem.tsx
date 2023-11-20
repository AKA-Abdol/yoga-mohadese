import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";
import { English2Persian } from "src/utils/converts";

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "avatar ml-md flex flex-col items-center space-y-sm cursor-pointer w-60 min-w-60 max-w-60 h-52 min-h-52 max-h-52 md:w-80 md:min-w-80 md:max-w-80 md:h-72 md:min-h-72 md:max-h-72",
        "py-sm px-sm rounded-lg",

        videoContext.selected.sessionNum === props.data.num
          ? "border-lg border-error"
          : "border-normal border-primary-dark"
      )}
      onClick={() => {
        videoContext.selected.sessionNum !== props.data.num && videoContext.selected.setSessionNum(props.data.num) ;
        drawerContext.onClose();
      }}
    >
      <p
        className={`text-lg text-primary-light`}
      >{`ویدیو شماره ${English2Persian(props.data.num)}`}</p>
      <div className="h-full mask mask-squircle max-w-[60%]">
        <img src={props.data.thumbnail} alt="thumbnail" />
      </div>
      <p className="text-xs text-primary-dark text-center">
        {props.data.title}
      </p>
    </div>
  );
};

export default SessionItem;
