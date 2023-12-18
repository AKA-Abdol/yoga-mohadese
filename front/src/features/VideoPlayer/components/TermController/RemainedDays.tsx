import classNames from "classnames";
import { FC, useContext } from "react";
import { English2Persian } from "src/utils/converts";
import { VideoContext } from "../../VideoContext";
import { getJalaliMonthName, isoStringDateDiffFromNow } from "src/utils/dates";
import { WithTerm } from "./types";

const RemainedDays: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;
  return (
    <div className={classNames("w-full flex px-8 py-2 text-sm")}>
      {!videoContext.selected.termId ? (
        "تعداد روز ترم مشخص نیست"
      ) : term.isError ? (
        "خطایی رخ داده است"
      ) : term.isLoading ? (
        "..."
      ) : (
        <div className="flex gap-1">
          <p className="text-sm">
            {English2Persian(
              `${isoStringDateDiffFromNow(term.data.course.end_date)} روز`
            )}
          </p>
          <p className="text-sm text-[#58423A50]">
            {`از دوره ${term.data.course.title} ${getJalaliMonthName(
              term.data.course.start_date
            )} ماه شما باقی مانده است.`}
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default RemainedDays;
