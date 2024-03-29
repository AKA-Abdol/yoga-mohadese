import classNames from "classnames";
import { FC, useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { WithTerm } from "./types";

const TermDescription: FC<WithTerm> = (props) => {
  const videoContext = useContext(VideoContext);
  const term = props.term;

  return (
    <div className={classNames("w-full flex justify-center")}>
      <p className="text-sm bg-primary-light text-brown p-md rounded-md mb-4">
        {!term.data?.course.description
          ? "محتوای مربوط به ترم در دسترس نیست"
          : term.isError
          ? "خطایی رخ داده است"
          : term.isLoading
          ? "..."
          : `${term.data?.course.description}`}
      </p>
    </div>
  );
};

export default TermDescription;
