import classNames from "classnames";
import { FC, useState } from "react";
import ImageButton from "./ImageButton";
import infoIcon from "src/assets/images/info-icon.png";
import playlistIcon from "src/assets/images/playlist-icon.png";
import hideIcon from "src/assets/images/hide-icon.png";
import showIcon from "src/assets/images/show-icon.png";

const SideControl: FC = () => {
  const [visiblity, setVisibility] = useState<boolean>(true);
  return (
    <div
      className={classNames(
        "flex flex-col justify-end items-center space-y-2 pb-20 px-1",
        "h-full w-12",
        "absolute right-0 top-0",
        "z-10"
      )}
    >
      <div className={classNames("w-full", !visiblity && "hidden")}>
        <ImageButton
          onClick={() => {}}
          src={infoIcon}
          alt="اطلاعات"
          subtitle="اطلاعات"
          className="space-y-1"
        />
        <ImageButton
          onClick={() => {}}
          src={playlistIcon}
          alt="جلسات"
          subtitle="جلسات"
        />
        <ImageButton
          onClick={() => setVisibility(false)}
          src={hideIcon}
          alt="پنهان"
          subtitle="پنهان"
          className="-space-y-1"
        />
      </div>
      <div className={classNames("w-full", visiblity && "hidden")}>
        <ImageButton
          onClick={() => setVisibility(true)}
          src={showIcon}
          alt="مشاهده"
          subtitle="مشاهده"
          className="-space-y-1"
        />
      </div>
    </div>
  );
};

export default SideControl;
