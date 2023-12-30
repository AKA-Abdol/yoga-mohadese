import classNames from "classnames";
import { FC, useContext } from "react";
import HomeButton from "src/components/ui/HomeButton";
import { TermControllerProps } from "./types";
import TermSelect from "./TermSelect";
import TermData from "./TermData";
import Button from "src/components/ui/Button";
import { tokenPersistor } from "src/persistors/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VideoContext } from "../../VideoContext";
import api from "src/services";
import { ITermApi } from "../../types";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";
import RemainedDays from "./RemainedDays";
import SessionList from "../SessionList";
import LogOut from "src/assets/svgs/LogOut";
import NavMenu from "src/components/ui/NavMenu/NavMenu";

const TermController: FC<TermControllerProps> = (props) => {
  const navigate = useNavigate();
  const videoContext = useContext(VideoContext);
  const term = useQuery({
    queryKey: ["term-data", videoContext.selected.termId],
    queryFn: api.get<{ course: ITermApi & WithVideos }>(
      `${BASE_TERM_URL}/${videoContext.selected.termId}`
    ),
  });

  return (
    <div
      className={classNames(
        "min-h-screen overflow-y-auto",
        "flex flex-col items-center space-y-sm",
        "bg-white w-full"
      )}
    >
      <div className="w-full px-8">
        <TermSelect />
      </div>
      <div className="w-full overflow-y-auto">
        <SessionList term={term} />
      </div>
    </div>
  );
};

export default TermController;
