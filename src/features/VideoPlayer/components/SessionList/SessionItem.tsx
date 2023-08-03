import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  return (
    <div
      className="avatar ml-md flex flex-col items-center space-y-sm cursor-pointer border-normal border-primary-light py-sm rounded-lg"
      onClick={() => videoContext.selected.setSessionNum(props.data.num)}
    >
      <p
        className={`text-lg text-primary-light`}
      >{`ویدیو شماره ${props.data.num}`}</p>
      <div className="h-full mask mask-squircle">
        <img src={props.data.thumbnail} alt="mohadese" />
      </div>
      <p className="text-xs text-primary-light text-center">
        {props.data.title}
      </p>
    </div>
  );
};

export default SessionItem;
