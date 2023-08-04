import classNames from "classnames";
import { FC, useContext } from "react";
import { English2Persian } from "src/utils/converts";
import { VideoContext } from "../../VideoContext";
import { isoStringDateDiffFromNow } from "src/utils/dates";
import { WithTerm } from "./types";

const RemainedDays: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;
  return (
    <div className={classNames("w-full flex justify-center")}>
      <p className="text-2xl bg-primary-dark text-primary-light p-md rounded-md">
        {!videoContext.selected.termId
          ? "ترمی برای شما وجود ندارد"
          : term.isError
          ? "خطایی رخ داده است"
          : term.isLoading
          ? "..."
          : `${English2Persian(
              `${isoStringDateDiffFromNow(term.data.course.end_date)}`
            )} روز مانده`}
      </p>
    </div>
  );
};

export default RemainedDays;
