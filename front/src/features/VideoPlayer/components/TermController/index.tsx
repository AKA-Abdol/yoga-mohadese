import classNames from "classnames";
import { FC, useContext } from "react";
import { TermControllerProps } from "./types";
import TermSelect from "./TermSelect";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VideoContext } from "../../VideoContext";
import api from "src/services";
import { ITermApi } from "../../types";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";
import SessionList from "../SessionList";

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
        <div className="w-full px-8 flex items-center flex-col">
          <TermSelect />
        </div>
      </div>
      <div className="w-full overflow-y-auto">
        <SessionList term={term} />
      </div>
    </div>
  );
};

export default TermController;
