import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const SessionItem: FC<SessionItemProps> = (props) => {
  const {t} = useTranslation()

  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "avatar ml-md flex flex-col items-center space-y-sm cursor-pointer",
        "py-sm px-sm rounded-lg",

        videoContext.selected.sessionNum === props.data.num
          ? "border-lg border-error"
          : "border-normal border-primary-light"
      )}
      onClick={() => {
        videoContext.selected.sessionNum !== props.data.num && videoContext.selected.setSessionNum(props.data.num) ;
        drawerContext.onClose();
      }}
    >
      <p
        className={`text-lg text-primary-light`}
      >{`${t("sessionItem-videoNumber")} ${props.data.num}`}</p>
      <div className="h-full mask mask-squircle max-w-[60%]">
        <img src={props.data.thumbnail} alt="thumbnail" />
      </div>
      <p className="text-xs text-primary-light text-center">
        {props.data.title}
      </p>
    </div>
  );
};

export default SessionItem;
