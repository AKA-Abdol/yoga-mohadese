import { FC, useContext, useEffect } from "react";
import SessionItem from "./SessionItem";
import classNames from "classnames";
import { VideoContext } from "../../VideoContext";
import Loading from "src/components/ui/Loading";
import { WithTerm } from "../TermController/types";
import TermData from "../TermController/TermData";

const SessionList: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;

  return (
    <div
      className={classNames(
        "w-full flex flex-col pt-4 pb-8 px-8",
        !videoContext.selected.termId && "justify-center items-center"
      )}
    >
      {!videoContext.selected.termId ? (
        <p className="text-primary-light">ترمی برای شما وجود ندارد!</p>
      ) : term.isError ? (
        <p className="text-primary-light">مشکلی رخ داده است.</p>
      ) : term.isLoading ? (
        <Loading textColor="light" />
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {term.data.course.videos.length ? (
            term.data.course.videos.map((video) => (
              <SessionItem data={video} key={`${video.id}`} />
            ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-primary-light">هنوز جلسه ای وجود ندارد!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SessionList;
