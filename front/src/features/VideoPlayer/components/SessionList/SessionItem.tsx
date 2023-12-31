import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";
import { English2Persian, number2PersianOrdinal } from "src/utils/convertors";
import PlayTriangleSVG from "src/assets/svgs/PlayTriangleSVG";
import { makeTextShort } from "src/utils/textManuplator";

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "relative flex flex-col cursor-pointer w-[200px] h-[350px] bg-[#383838]",
        "p-4 rounded-[8px]",
        videoContext.selected.sessionNum === props.data.num
          ? "border-lg border-error"
          : ""
      )}
      onClick={() => {
        videoContext.selected.sessionNum !== props.data.num &&
          videoContext.selected.setSessionNum(props.data.num);
        drawerContext.onClose();
      }}
    >
      <img
        src={props.data.thumbnail}
        alt="thumbnail"
        className="absolute top-0 right-0 w-full h-full object-contain rounded-[8px] opacity-30"
      />
      <p
        className={` text-sm text-[#fef3e9] opacity-70`}
      >{`جلسه ${number2PersianOrdinal(props.data.num - 1)}`}</p>
      <p className="text-[#fef3e9b6] text-sm  mt-6 mb-auto">
        {props.data.description && props.data.description}
      </p>
      <div className="flex justify-between items-center border-t-2 border-[#fef3e9b6] pt-2">
        <p className=" text-lg text-[#fef3e9]">
          {props.data.title}
        </p>
        <div className="flex gap-1 items-center">
          <p className="text-[#fef3e9b6] text-sm flex-row gap-2">
            {English2Persian(60)} دقیقه
          </p>
          <PlayTriangleSVG />
        </div>
      </div>
    </div>
  );
};

export default SessionItem;
