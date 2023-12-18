import { FC, useContext } from "react";
import { SessionItemProps } from "./types";
import { VideoContext } from "../../VideoContext";
import { DrawerContext } from "../..";
import classNames from "classnames";
import { English2Persian, number2PersianOrdinal } from "src/utils/converts";

const SessionItem: FC<SessionItemProps> = (props) => {
  const videoContext = useContext(VideoContext);
  const drawerContext = useContext(DrawerContext);
  return (
    <div
      className={classNames(
        "relative flex flex-col cursor-pointer w-full min-w-full max-w-full h-40 min-h-40 max-h-40 bg-[#383838]",
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
        className=" absolute top-0 right-0 w-full h-full object-cover rounded-[8px] opacity-30"
      />
      <p
        className={` text-sm text-[#fef3e9] opacity-70`}
      >{`جلسه ${number2PersianOrdinal(props.data.num - 1)}`}</p>
      <p className=" text-lg text-[#fef3e9] mt-auto mb-2">{props.data.title}</p>
      <div className="flex justify-between items-center border-t-2 border-[#fef3e9b6] pt-2">
        <p className="text-[#fef3e9b6] text-sm">{"description"}</p> {/* it probably needs text shorter */}
        <div className="flex gap-1 items-center">
          <p className="text-[#fef3e9b6] text-sm flex-row gap-2">
            {"time"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g opacity="0.7">
              <path
                d="M11.5875 5.62505L5.55001 2.16255C5.22331 1.9739 4.85251 1.87507 4.47526 1.87611C4.09801 1.87714 3.72775 1.978 3.40209 2.16845C3.07644 2.35889 2.80698 2.63213 2.6211 2.96041C2.43522 3.28869 2.33954 3.66032 2.34376 4.03755V10.9875C2.34376 11.5544 2.56896 12.0981 2.96982 12.499C3.37068 12.8998 3.91436 13.125 4.48126 13.125C4.85654 13.1244 5.22507 13.0253 5.55001 12.8375L11.5875 9.37505C11.9119 9.18729 12.1813 8.91753 12.3685 8.59282C12.5557 8.26811 12.6543 7.89987 12.6543 7.52505C12.6543 7.15022 12.5557 6.78198 12.3685 6.45727C12.1813 6.13257 11.9119 5.8628 11.5875 5.67505V5.62505ZM10.9625 8.2438L4.92501 11.7563C4.78969 11.833 4.6368 11.8733 4.48126 11.8733C4.32572 11.8733 4.17283 11.833 4.03751 11.7563C3.90257 11.6784 3.79052 11.5663 3.71263 11.4314C3.63473 11.2964 3.59374 11.1434 3.59376 10.9875V4.01255C3.59374 3.85673 3.63473 3.70366 3.71263 3.56871C3.79052 3.43376 3.90257 3.3217 4.03751 3.2438C4.17339 3.16827 4.32582 3.12748 4.48126 3.12505C4.6366 3.12824 4.78885 3.16898 4.92501 3.2438L10.9625 6.7313C11.0975 6.80917 11.2096 6.92122 11.2875 7.05616C11.3655 7.19111 11.4065 7.34421 11.4065 7.50005C11.4065 7.65589 11.3655 7.80898 11.2875 7.94393C11.2096 8.07888 11.0975 8.19092 10.9625 8.2688V8.2438Z"
                fill="#FEF3E9"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SessionItem;
