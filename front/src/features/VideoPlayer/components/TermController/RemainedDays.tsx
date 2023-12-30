import classNames from "classnames";
import { FC, useContext } from "react";
import { English2Persian } from "src/utils/convertors";
import { VideoContext } from "../../VideoContext";
import {
  translateISOString2JalaliMonth,
  isoStringDateDiffFromNow,
} from "src/utils/dates";
import { WithTerm } from "./types";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { ITermApi } from "../../types";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";

const RemainedDays: FC = (props) => {
  const videoContext = useContext(VideoContext);

  const term = useQuery({
    queryKey: ["term-data", videoContext.selected.termId],
    queryFn: api.get<{ course: ITermApi & WithVideos }>(
      `${BASE_TERM_URL}/${videoContext.selected.termId}`
    ),
  });

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
            {`از دوره ${
              term.data.course.title
            } ${translateISOString2JalaliMonth(
              term.data.course.start_date
            )} ماه شما باقی مانده است.`}
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default RemainedDays;
