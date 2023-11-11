import classNames from "classnames";
import { FC, useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { WithTerm } from "./types";
import { useTranslation } from "react-i18next";

const TermDescription: FC<WithTerm> = (props) => {
  const {t} = useTranslation();
  const videoContext = useContext(VideoContext);
  const term = props.term;
  return (
    <div className={classNames("w-full flex justify-center")}>
      <p className="text-sm bg-primary-dark text-primary-light p-md rounded-md mb-4">
        {!videoContext.selected.termDescription
          ? `${t("termDescription-termContentIsNotAvailable")}`
          : term.isError
          ? `${t("termDescription-anErrorOccurred")}`
          : term.isLoading
          ? "..."
          : `${term.data.course.description}`}
      </p>
    </div>
  );
};

export default TermDescription;
