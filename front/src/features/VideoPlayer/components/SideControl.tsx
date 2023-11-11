import classNames from "classnames";
import { FC, useState } from "react";
import ImageButton from "./ImageButton";
import infoIcon from "src/assets/images/info-icon.png";
import playlistIcon from "src/assets/images/playlist-icon.png";
import hideIcon from "src/assets/images/hide-icon.png";
import showIcon from "src/assets/images/show-icon.png";
import ModalImageButton from "./ModalImageButton";
import { SideControlProps } from "./types";
import { useTranslation } from "react-i18next";

const SideControl: FC<SideControlProps> = (props) => {
  const {t} = useTranslation()
  const [visiblity, setVisibility] = useState<boolean>(true);
  return (
    <div
      className={classNames(
        "flex flex-col justify-start items-center pt-sm px-1",
        "w-12",
        "absolute right-0 top-0",
        "z-10"
      )}
    >
      <div className={classNames("w-full space-y-sm", !visiblity && "hidden")}>
        <ImageButton
          onClick={() => setVisibility(false)}
          src={hideIcon}
          alt={t("sideControl-hide")}
          subtitle={t("sideControl-hide")}
          className="-space-y-1"
        />
        <ModalImageButton
          src={infoIcon}
          alt={t("sideControl-info")}
          subtitle={t("sideControl-info")}
          className="space-y-1"
          id={props.infoModalId}
        />
        <ModalImageButton
          src={playlistIcon}
          alt={t("sideControl-sessions")}
          subtitle={t("sideControl-sessions")}
          id={props.sessionListModalId}
        />
      </div>
      <div className={classNames("w-full", visiblity && "hidden")}>
        <ImageButton
          onClick={() => setVisibility(true)}
          src={showIcon}
          alt={t("sideControl-watch")}
          subtitle={t("sideControl-watch")}
          className="-space-y-1"
        />
      </div>
    </div>
  );
};

export default SideControl;
