import { FC, useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { getLevelTitle } from "src/pages/Admin/Terms/utils";
import Select from "src/components/ui/Select";

const TermSelect: FC = () => {
  const videoContext = useContext(VideoContext);
  if (videoContext.terms.length === 0)
    return (
      <p className="text-primary-dark text-lg">
        ترمی به شما اختصاص داده نشده است!
      </p>
    );
  return (
    <Select
      optionTexts={videoContext.terms.map(
        (term) => `${term.title} (${getLevelTitle(term.level)})`
      )}
      options={videoContext.terms.map((term) => term.id)}
      onChange={(event) => videoContext.selected.setTermId(event.target.value)}
      classnames="w-4/5 text-center"
      optionsClassnames="text-center"
    />
  );
};

export default TermSelect;
