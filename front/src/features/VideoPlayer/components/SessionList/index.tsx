import { FC, useContext } from "react";
import SessionItem from "./SessionItem";
import classNames from "classnames";
import { VideoContext } from "../../VideoContext";
import Loading from "src/components/ui/Loading";
import { WithTerm } from "../TermController/types";

const SessionList: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;

  return (
    <div
      className={classNames(
        "h-60 w-full flex flex-row py-sm overflow-x-auto md:h-80",
        "bg-primary-light",
        "pr-sm",
        !videoContext.selected.termId && "justify-center items-center"
      )}
    >
      {!videoContext.selected.termId ? (
<<<<<<< Updated upstream
        <p className="text-primary-light">ترمی برای شما وجود ندارد!</p>
      ) : term.isError ? (
        <p className="text-primary-light">مشکلی رخ داده است.</p>
=======
        <p className="text-primary-dark">{t(["sessionList-noTermAvailableForYou"])}</p>
      ) : term.isError ? (
        <p className="text-primary-dark">{t(["sessionList-anIssueOccurred"])}</p>
>>>>>>> Stashed changes
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
              <p className="text-primary-light">هنوز جلسه ای وجود ندارد!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SessionList;
