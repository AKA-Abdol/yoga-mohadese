import classNames from "classnames";
import { FC, useContext } from "react";
import { English2Persian } from "src/utils/converts";
import { VideoContext } from "../../VideoContext";
import { isoStringDateDiffFromNow } from "src/utils/dates";
import { WithTerm } from "./types";
import { useTranslation } from "react-i18next";

const RemainedDays: FC<WithTerm> = (props) => {
  const {t} = useTranslation()

  const videoContext = useContext(VideoContext);
  const term = props.term;
  return (
    <div className={classNames("w-full flex justify-center")}>
      <p className="text-sm bg-primary-dark text-primary-light p-md rounded-md">
        {!videoContext.selected.termId
          ? `${t("remainedDays-numberOfTermDaysIsNotSpecified")}`
          : term.isError
          ? `${t("remainedDays-anErrorOccurred")}`
          : term.isLoading
          ? "..."
          : `${English2Persian(
              `${isoStringDateDiffFromNow(term.data.course.end_date)}`
            )} ${t("remainedDays-daysLeft")}`}
      </p>
    </div>
  );
};

export default RemainedDays;
