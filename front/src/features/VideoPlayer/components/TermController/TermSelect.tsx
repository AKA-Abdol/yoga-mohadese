import { FC, useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { getLevelTitle } from "src/pages/Admin/Terms/utils";
import Select from "src/components/ui/Select";
import { useTranslation } from "react-i18next";

const TermSelect: FC = () => {
  const { t } = useTranslation();
  const videoContext = useContext(VideoContext);
  if (videoContext.terms.length === 0)
    return (
      <p className="text-primary-dark text-lg">
        {t("termSelect-noTermAssignedToYou")}
      </p>
    );
  return (
    <Select
      optionTexts={videoContext.terms.map(
        (term) => `${term.title} (${getLevelTitle(term.level)})`
      )}
      options={videoContext.terms.map((term) => term.id)}
      onChange={(event) => {
        videoContext.selected.setTermId(event.target.value);
        videoContext.selected.setSessionNum(undefined);
      }}
      classnames="w-4/5 text-center"
      optionsClassnames="text-center"
    />
  );
};

export default TermSelect;
