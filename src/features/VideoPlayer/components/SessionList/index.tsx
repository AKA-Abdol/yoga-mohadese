import { FC, useContext } from "react";
import SessionItem from "./SessionItem";
import classNames from "classnames";
import { VideoContext } from "../../VideoContext";
import Loading from "src/components/ui/Loading";
import { WithTerm } from "../TermController/types";

const SessionList: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;

  console.log(videoContext.selected.termId);
  return (
    <div
      className={classNames(
        "h-64 w-full flex flex-row py-sm overflow-x-auto md:h-80",
        "bg-primary-dark",
        "pr-sm",
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
        <>
          {term.data.course.videos.length ? (
            term.data.course.videos.map((video) => <SessionItem data={video} />)
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
