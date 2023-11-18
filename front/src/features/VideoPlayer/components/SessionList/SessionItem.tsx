import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";
<<<<<<< Updated upstream
=======
import { useTranslation } from "react-i18next";
import { English2Persian } from "src/utils/converts";
>>>>>>> Stashed changes

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "avatar ml-md flex flex-col items-center space-y-sm cursor-pointer",
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
<<<<<<< Updated upstream
        className={`text-lg text-primary-light`}
      >{`ویدیو شماره ${props.data.num}`}</p>
=======
        className={`text-lg text-primary-dark`}
      >{`${t(["sessionItem-videoNumber"])} ${English2Persian(props.data.num)}`}</p>
>>>>>>> Stashed changes
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
