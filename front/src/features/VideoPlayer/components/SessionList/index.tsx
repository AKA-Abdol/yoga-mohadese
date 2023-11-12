import { FC, useContext } from "react";
import SessionItem from "./SessionItem";
import classNames from "classnames";
import { VideoContext } from "../../VideoContext";
import Loading from "src/components/ui/Loading";
import { WithTerm } from "../TermController/types";
import { useTranslation } from "react-i18next";

const SessionList: FC<WithTerm> = (props) => {
  const {t} = useTranslation()
  
  const videoContext = useContext(VideoContext);
  const term = props.term;



  return (
    <div
      className={classNames(
        "h-60 w-full flex flex-row py-sm overflow-x-auto md:h-80",
        "bg-primary-dark",
        "pr-sm",
        !videoContext.selected.termId && "justify-center items-center"
      )}
    >
      {!videoContext.selected.termId ? (
        <p className="text-primary-light">{t(["sessionList-noTermAvailableForYou"])}</p>
      ) : term.isError ? (
        <p className="text-primary-light">{t(["sessionList-anIssueOccurred"])}</p>
      ) : term.isLoading ? (
        <Loading textColor="light" />
      ) : (
        <>
          {term.data.course.videos.length ? (
            term.data.course.videos.map((video) => (
              <SessionItem data={video} key={`video-${video.id}`} />
            ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-primary-light">{t(["sessionList-noSessionsAvailableYet"])}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SessionList;
