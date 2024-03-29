import { FC, useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { getLevelTitle } from "src/pages/Admin/Terms/utils";
import Select from "src/components/ui/Select";
import TermCard from "./TermCard";

const TermSelect: FC = () => {
  const videoContext = useContext(VideoContext);

  // const onSelectTerm = (event: { target: { value: string | undefined; }; }) => {
  //   videoContext.selected.setTermId(event.target.value);
  //   videoContext.selected.setSessionNum(undefined);
  // };

  if (videoContext.terms.length === 0)
    return (
      <p className="text-brown text-lg">
        ترمی به شما اختصاص داده نشده است!
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
      classnames="w-full text-center md:w-2/5 mt-2"
      optionsClassnames="text-center w-10"
    />
  );
};

export default TermSelect;
{
  /* <Select
      optionTexts={videoContext.terms.map(
        (term) => `${term.title} (${getLevelTitle(term.level)})`
      )}
      options={videoContext.terms.map((term) => term.id)}
      onChange={(event) => {
        videoContext.selected.setTermId(event.target.value);
        videoContext.selected.setSessionNum(undefined);
      }}
      classnames="w-full text-center md:w-2/5 mt-2"
      optionsClassnames=" text-center w-full max-w-full min-w-full"
    /> */
}

{
  /* <div className="w-full flex flex-col gap-4">
        {videoContext.terms.map((term, index) => (
          <TermCard term={term} index={index} onSelectTerm={onSelectTerm} />
        ))}
      </div> */
}
